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
    const { id } = req.params;
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
    const { id } = req.params;
    const updates = req.body; 

    if (!updates || Object.keys(updates).length === 0) {
      return res.status(400).json({ error: "No update fields provided." });
    }

    const movieRef = admin.firestore().collection("movies").doc(id);

    await movieRef.update(updates);

    res.status(200).json({ message: "Movie updated successfully." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
