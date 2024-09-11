// src/utils/api.js
export const identifyItem = async (imageData) => {
  // Simulated data for identification result
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        type: "Domestic Cat",
        breeds: [
          {
            name: "Siamese",
            scientificName: "Felis catus siamensis",
            description:
              "Siamese cats are known for their striking blue eyes, short coat, and sleek, slender bodies. They are very vocal and affectionate. Siamese cats are also intelligent and curious, often forming strong bonds with their owners.",
            origin: "Thailand",
            lifeSpan: "15-20 years",
            personality: "Sociable, Intelligent, Vocal",
          },
        ],
      });
    }, 1000);
  });
};
