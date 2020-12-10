

export async function Getannonce() {

    try {
        let annonces = await fetch('http://localhost:3000/db');

        let result = await annonces.json();
        annonces = null;

        return result.annonces;
    }
    catch(error) {
        throw error;
    }
}
