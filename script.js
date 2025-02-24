// 1. Game Questions
const questions = [
    {
        question: "Tutti conosciamo la famosa ape da miele, ma quante specie di api ci sono in Italia secondo te?",
        options: [
            { text: "Circa 50", correct: false },
            { text: "Circa 250", correct: false },
            { text: "Più di 1000", correct: true }
        ],
        image: "images/bee.png"
    },
    {
        question: "Quale tra questi animali non è un impollinatore?",
        options: [
            { text: "Macaone (Farfalla)", correct: false },
            { text: "Pipistrello della tequila (Pipistrello)", correct: true },
            { text: "Tucano toco (Uccello)", correct: false }
        ],
        image: "images/butterfly.png"
    },
    {
        question: "Gli impollinatori si trovano davvero quasi ovunque! Dove non sono mai stati visti?",
        options: [
            { text: "Nel deserto", correct: false },
            { text: "Nello spazio", correct: false },
            { text: "Sull'Everest", correct: true }
        ],
        image: "images/space.png"
    },
    {
        question: "Alcuni impollinatori possono compiere viaggi incredibili! Quanti chilometri può percorrere la farfalla monarca durante le sue migrazioni?",
        options: [
            { text: "50 km", correct: false },
            { text: "1000 km", correct: false },
            { text: "4500 km", correct: true }
        ],
        image: "images/monarca.png"
    },
    {
        question: "Che percentuale del cibo che mangiamo dipende dall’impollinazione animale?",
        options: [
            { text: "25 %", correct: false },
            { text: "45 %", correct: false },
            { text: "75 %", correct: true }
        ],
        image: "images/frutta.png"
    },
    {
        question: "Che percentuale di piante dipende almeno in parte dall’impollinazione mediata da animali?",
        options: [
            { text: "20 %", correct: false },
            { text: "50 %", correct: false },
            { text: "90 %", correct: true }
        ],
        image: "images/orchidea.png"
    },
    {
        question: "Quale di questi alimenti non sarebbe più disponibile se gli impollinatori sparissero?",
        options: [
            { text: "Caffè", correct: true },
            { text: "Grano", correct: false },
            { text: "Carote", correct: false }
        ],
        image: "images/cafe.png"
    },
    {
        question: "Quale è uno dei principali rischi per gli impollinatori?",
        options: [
            { text: "Traffico stradale", correct: false },
            { text: "Pesticidi", correct: true },
            { text: "Ragnatele", correct: false }
        ],
        image: "images/miller_urey.png"
    },
    {
        question: "Di cosa si nutrono principalmente gli impollinatori?",
        options: [
            { text: "Polline e nettare", correct: true },
            { text: "Foglie", correct: false },
            { text: "Insetti", correct: false }
        ],
        image: "images/nucleotides.png"
    },
    {
        question: "Da cosa è composto principalmente il nettare?",
        options: [
            { text: "Zuccheri", correct: true },
            { text: "Proteine", correct: false },
            { text: "Vitamine", correct: false }
        ],
        image: "images/rna.png"
    },
    {
        question: "Ora che abbiamo verificato la nostra conoscenza degli impollinatori è ora di trovare delle soluzioni per aiutarli. Gli impollinatori stanno morendo di caldo in città, devi trovare una soluzione",
        options: [
            { text: "Crea zone alberate", correct: true },
            { text: "Spruzza acqua sulle strade", correct: false },
            { text: "Aggiungi cemento per ridurre le piante infestanti", correct: false }
        ],
        image: "images/hydrothermal_vent.png"
    },
    {
        question: "Ora che le temperature sono migliorate, gli impollinatori faticano comunque a trasferirsi in città. Come puoi rendere l’ambiente più accogliente?",
        options: [
            { text: "Tagliare il prato ogni settimana", correct: false },
            { text: "Coltivare piante aromatiche sul balcone", correct: true },
            { text: "Aumentare l'illuminazione notturna per attirare più insetti", correct: false }
        ],
        image: "images/abiogenesis.png"
    },
    {
        question: "In ambiente agricolo gli impollinatori stanno diminuendo e i contadini perdono produzione. Cosa si può fare per aiutarli?",
        options: [
            { text: "Circondare i campi coltivati con fiori selvatici", correct: true },
            { text: "Usare diserbanti per eliminare le erbacce", correct: false },
            { text: "Arare il terreno più spesso per evitare la cescita spontanea di piante", correct: false }
        ],
        image: "images/rna_world.png"
    },
    {
        question: "Which type of chemical bond do I require for the formation of complex organic molecules?",
        options: [
            { text: "Covalent bond", correct: true },
            { text: "Ionic bond", correct: false }
        ],
        image: "images/covalent_bond.png"
    },
    {
        question: "Some of you told me that I really need lipids. But why?!",
        options: [
            { text: "They are able to produce essential molecules for living organisms", correct: false },
            { text: "They model early cell membranes", correct: true }
        ],
        image: "images/liposome.png"
    },
    {
        question: "I really would like to have life on my surface! But sometimes I miss chemicals. Maybe my celestial friends can help me. But, who?",
   
