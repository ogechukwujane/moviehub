const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();
const db = admin.firestore();

exports.getMovies = functions.https.onRequest(async (req, res) => {
  try {
    const snapshot = await db.collection("movies").get();
    const movies = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.status(200).json(movies)
  } catch (error) { res.status(500).json({ error: error.message }) }
});

exports.getMovieById = functions.https.onRequest(async (req, res) => {
  try {
    const { id } = req.params; // Extract movie ID from URL parameters
    const movieDoc = await db.collection("movies").doc(id).get();

    if (!movieDoc.exists) {
      return res.status(404).json({ message: "Movie not found" });
    }

    res.status(200).json({ id: movieDoc.id, ...movieDoc.data() });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

exports.updateMovie = functions.https.onRequest(async (req, res) => {
  try {
    const { id } = req.params; // Get the movie ID from the URL
    const updates = req.body; // Get the fields to update from request body

    // Ensure that at least one field is provided
    if (!updates || Object.keys(updates).length === 0) {
      return res.status(400).json({ error: "No update fields provided." });
    }

    // Get reference to the movie document
    const movieRef = admin.firestore().collection("movies").doc(id);

    // Update only the provided fields
    await movieRef.update(updates);

    res.status(200).json({ message: "Movie updated successfully." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
