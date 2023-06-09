// styling
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './assets/css/navbar.css';
import './assets/css/footer.css';
import './assets/css/wwa_hero.css'
import './assets/css/wwa_services.css';
import './assets/css/wwa_pricing.css';
import './assets/css/indexStyle.css';
import './assets/css/works.css';
import './assets/css/w_quote.css';
import './assets/css/w_reviews.css';
import './assets/css/careers.css';
import './assets/css/contact.css';

// pages
import WhoWeAre from './pages/whoWeAre';
import Works from './pages/works';
import Careers from './pages/careers';
import ContactUs from './pages/contact';

// dependencies
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "@aws-amplify/ui-react/styles.css";
import { API, Storage } from "aws-amplify";
import {
  withAuthenticator,
  Button,
  Flex,
  Heading,
  Text,
  TextField,
  Image,
  View,
  Card
} from "@aws-amplify/ui-react";
import { listNotes } from "./graphql/queries";
import {
  createNote as createNoteMutation,
  deleteNote as deleteNoteMutation
} from "./graphql/mutations";

// components
import NavbarBM from './components/navbar';

function App({ signOut }) {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  async function fetchNotes() {
    const apiData = await API.graphql({ query: listNotes });
    const notesFromAPI = apiData.data.listNotes.items;
    await Promise.all(
      notesFromAPI.map(async (note) => {
        if (note.image) {
          const url = await Storage.get(note.name);
          note.image = url;
        }
        return note;
      })
    );
    setNotes(notesFromAPI);
  }

  async function createNote(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const image = form.get("image");
    const data = {
      name: form.get("name"),
      description: form.get("description"),
      image: image.name,
    };
    if (!!data.image) await Storage.put(data.name, image);
    await API.graphql({
      query: createNoteMutation,
      variables: { input: data },
    });
    fetchNotes();
    event.target.reset();
  }

  async function deleteNote({ id, name }) {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
    await API.graphql({
      query: deleteNoteMutation,
      variables: { input: { id } },
    });
  }

  return (
    <View className="App">
      <BrowserRouter>
      <NavbarBM />
        <Routes>
          <Route path="/" element={<WhoWeAre/>} />
          <Route path="/works" element={<Works/>} />
          <Route path="/careers" element={<Careers/>} />
          <Route path="/contactUs" element={<ContactUs/>} />
        </Routes>
      </BrowserRouter>

      <Heading level={1}>My Notes App</Heading>
      <View as="form" margin="3rem 0" onSubmit={createNote}>
        <Flex direction="row" justifyContent="center">
          <TextField
            name="name"
            placeholder="Note Name"
            label="Note Name"
            labelHidden
            variation="quiet"
            required
          />
          <TextField
            name="description"
            placeholder="Note Description"
            label="Note Description"
            labelHidden
            variation="quiet"
            required
          />
          <Button type="submit" variation="primary">
            Create Note
          </Button>
        </Flex>
      </View>
      <Heading level={2}>Current Notes</Heading>
      <View margin="3rem 0">
        {notes.map((note) => (
          <Flex
            key={note.id || note.name}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Text as="strong" fontWeight={700}>
              {note.name}
            </Text>
            <Text as="span">{note.description}</Text>
            {note.image && (
              <Image
                src={note.image}
                alt={`visual aid for ${notes.name}`}
                style={{ width: 400 }}
              />
            )}
            <Button variation="link" onClick={() => deleteNote(note)}>
              Delete note
            </Button>
          </Flex>
        ))}
      </View>
      <View
        name="image"
        as="input"
        type="file"
        style={{ alignSelf: "end" }}
      />

      <Card>
        <Heading level={1}>We now have Auth!</Heading>
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
}

export default withAuthenticator(App);
