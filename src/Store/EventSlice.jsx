import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "Indie Jamming Night - Banjara Hills",
    category: "Jamming",
    price: 299,
    location: "Music Lounge, Banjara Hills",
    date: "Sat, 26 Oct",
    time: "7:30 PM",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=600&q=80",
    desc: "Acoustic jam",
  },
  {
    id: 2,
    name: "Rock Jam - Gachibowli",
    category: "Jamming",
    price: 399,
    location: "Hard Rock Cafe, Gachibowli",
    date: "Fri, 1 Nov",
    time: "8:00 PM",
    image:
      "https://images.unsplash.com/photo-1516450360452-9312abbf6f7e?auto=format&fit=crop&w=600&q=80",
    desc: "Rock night",
  },
  {
    id: 3,
    name: "Soulful Strings - Kondapur",
    category: "Jamming",
    price: 249,
    location: "The Guitar Cafe, Kondapur",
    date: "Sat, 2 Nov",
    time: "6:30 PM",
    image:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
    desc: "Guitar jam",
  },
  {
    id: 4,
    name: "EDM Night - Jubilee Hills",
    category: "Jamming",
    price: 499,
    location: "Prism Club, Jubilee",
    date: "Sat, 9 Nov",
    time: "9:00 PM",
    image:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=600&q=80",
    desc: "EDM party",
  },
  {
    id: 5,
    name: "Hip Hop Cypher - Secunderabad",
    category: "Jamming",
    price: 249,
    location: "Street Culture, Secunderabad",
    date: "Sun, 17 Nov",
    time: "5:00 PM",
    image:
      "https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?auto=format&fit=crop&w=600&q=80",
    desc: "Hip hop",
  },
  {
    id: 6,
    name: "Metal Mayhem - Begumpet",
    category: "Jamming",
    price: 349,
    location: "Storm Music, Begumpet",
    date: "Sat, 23 Nov",
    time: "8:30 PM",
    image:
      "https://images.unsplash.com/photo-1501384025876-42aeb072f6b4?auto=format&fit=crop&w=600&q=80",
    desc: "Metal",
  },
  {
    id: 7,
    name: "Jam with Strangers - Hitech City",
    category: "Jamming",
    price: 199,
    location: "Social Offline, Hitech",
    date: "Sat, 30 Nov",
    time: "6:00 PM",
    image:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    desc: "Random jam",
  },
  {
    id: 8,
    name: "Sunset Acoustic Jam - Gandipet Lake",
    category: "Jamming",
    price: 349,
    location: "Gandipet Lake View",
    date: "Sun, 8 Dec",
    time: "5:00 PM",
    image:
      "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=600&q=80",
    desc: "Lake jam",
  },
  {
    id: 9,
    name: "Open Mic Night - Hitech City",
    category: "Open Mic",
    price: 199,
    location: "Doors Cafe, Hitech",
    date: "Sun, 27 Oct",
    time: "6:00 PM",
    image:
      "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?auto=format&fit=crop&w=600&q=80",
    desc: "Show talent",
  },
  {
    id: 10,
    name: "Comedy + Music Open Mic - Madhapur",
    category: "Open Mic",
    price: 149,
    location: "The Laughter Room, Madhapur",
    date: "Sat, 2 Nov",
    time: "7:00 PM",
    image:
      "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&w=600&q=80",
    desc: "Fun open mic",
  },
  {
    id: 11,
    name: "Sufi Night - Old City",
    category: "Open Mic",
    price: 299,
    location: "Sufi Lounge, Charminar",
    date: "Sun, 10 Nov",
    time: "8:00 PM",
    image:
      "https://images.unsplash.com/photo-1514320290767-155cc6cf2c6d?auto=format&fit=crop&w=600&q=80",
    desc: "Sufi",
  },
  {
    id: 12,
    name: "Karaoke Night - Ameerpet",
    category: "Open Mic",
    price: 249,
    location: "Radio Mirchi Karaoke, Ameerpet",
    date: "Fri, 29 Nov",
    time: "7:30 PM",
    image:
      "https://images.unsplash.com/photo-1516450360452-9312abbf6f7e?auto=format&fit=crop&w=600&q=80",
    desc: "Karaoke",
  },
  {
    id: 13,
    name: "College Band Open Mic - KPHB",
    category: "Open Mic",
    price: 99,
    location: "Raga Studio, KPHB",
    date: "Sat, 23 Nov",
    time: "3:00 PM",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=600&q=80",
    desc: "College bands",
  },
  {
    id: 14,
    name: "Standup + Guitar - Madhapur",
    category: "Open Mic",
    price: 299,
    location: "Hyderabad Comedy Club, Madhapur",
    date: "Sat, 7 Dec",
    time: "7:00 PM",
    image:
      "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=600&q=80",
    desc: "Comedy music",
  },
  {
    id: 15,
    name: "Poetry & Strings - Jubilee Hills",
    category: "Open Mic",
    price: 199,
    location: "Lamakaan, Banjara Hills",
    date: "Sun, 1 Dec",
    time: "6:00 PM",
    image:
      "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=600&auto=format&fit=crop&q=80",
    desc: "Poetry night",
  },
  {
    id: 16,
    name: "Acoustic Meetup - Jubilee Hills",
    category: "Meetup",
    price: 299,
    location: "Strum Studio, Jubilee",
    date: "Sun, 27 Oct",
    time: "5:00 PM",
    image:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=600&q=80",
    desc: "Meet musicians",
  },
  {
    id: 17,
    name: "Drum Circle Meetup - KBR Park",
    category: "Meetup",
    price: 99,
    location: "KBR Park Entrance",
    date: "Sun, 3 Nov",
    time: "5:30 AM",
    image:
      "https://images.unsplash.com/photo-1519892300165-cb15475c1d9f?auto=format&fit=crop&w=600&q=80",
    desc: "Drum circle",
  },
  {
    id: 18,
    name: "Beatbox Meetup - Hitech City",
    category: "Meetup",
    price: 199,
    location: "WeWork, Hitech City",
    date: "Sat, 16 Nov",
    time: "4:00 PM",
    image:
      "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=600&q=80",
    desc: "Beatbox",
  },
  {
    id: 19,
    name: "Female Artists Meetup - Jubilee",
    category: "Meetup",
    price: 199,
    location: "SHE Studio, Jubilee Hills",
    date: "Sun, 24 Nov",
    time: "4:30 PM",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=600&q=80",
    desc: "Women in music",
  },
  {
    id: 20,
    name: "Classical Fusion - Ravindra Bharathi",
    category: "Meetup",
    price: 399,
    location: "Ravindra Bharathi, Lakdikapul",
    date: "Sun, 1 Dec",
    time: "6:00 PM",
    image:
      "https://images.unsplash.com/photo-1516450360452-9312abbf6f7e?auto=format&fit=crop&w=600&q=80",
    desc: "Classical",
  },
];

const slice = createSlice({
  name: "events",
  initialState,
  reducers: {
    addEvent: (s, a) => {
      s.push({ id: Date.now(), ...a.payload });
    },
    deleteEvent: (s, a) => s.filter((e) => e.id !== a.payload),
    updateEvent: (s, a) => {
      const i = s.findIndex((e) => e.id === a.payload.id);
      if (i !== -1) s[i] = a.payload;
    },
  },
});
export const { addEvent, deleteEvent, updateEvent } = slice.actions;
export default slice.reducer;
