const fs = require("fs");
const path = require("path");

const getMetadata = (tokenId) => ({
    name: `K9 #${tokenId}`,
    image: "https://k9artworks.com/assets/k9.gif",
    description:
        "K9's is a collection of 4,444 autonomously generated 3D cyber dogs who prowl the desolate streets of the future!",
});

const createMetadata = () => {
    for (let i = 0; i < 4444; i++) {
        const content = getMetadata(i);
        fs.writeFile(
            path.join(__dirname, "../dist/assets/metadata", `${i}.json`),
            JSON.stringify(content),
            () => {
                // console.log("Created", i);
                console.log(
                    path.join(__dirname, "../dist/assets/metadata", `${i}.json`)
                );
            }
        );
    }
};
createMetadata();
