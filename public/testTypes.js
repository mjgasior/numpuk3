const ANAEROBIC_BACTERIA = [
  "Lactobacillus spp",
  "Lactobacillus – H2O2",
  "Bifidobacterium spp",
  "Bacteroides spp",
  "Bacteroides ovatus",
  "Campylobacter spp",
  "Campylobacter jejuni",
  "Clostridium spp",
  "Clostridium bolteae",
  "Clostridium innocuum",
  "Clostridium perfringens",
  "Clostridium ramosum",
  "Collinsella spp",
  "Collinsella aerofaciens",
  "Peptococcus spp",
  "Peptostreptococcus spp",
  "Prevotella spp",
  "Eggerthella lenta",
  "Fusobacterium spp",
  "Megamonas spp",
  "Pediococcus acidilactici",
  "Alistipes finegoldii",
  "Butyricimonas virosa",
];

const FUNGI = ["Candida albicans", "Candida non-albicans", "Grzyby pleśniowe"];

const GRAM_PLUS_BACTERIA = [
  "Enterococcus spp",
  "Streptococcus spp",
  "Staphylococcus spp",
  "Staphylococcus aureus",
  "Bacillus spp",
  "Lactococcus lactis",
];

const GRAM_MINUS_BACTERIA = [
  "Escherichia coli",
  "Proteus spp",
  "Proteus vulgaris",
  "Proteus mirabilis",
  "Pseudomonas spp",
  "Pseudomonas aeruginosa",
  "Pseudomonas citronellolis",
  "Klebsiella spp",
  "Klebsiella aerogenes",
  "Klebsiella oxytoca",
  "Klebsiella pneumoniae",
  "Enterobacter spp",
  "Enterobacter cloacae",
  "Citrobacter spp",
  "Citrobacter freundii",
  "Morganella spp",
  "Morganella morganii",
  "Serratia spp",
  "Escherichia coli Biovare",
  "Salmonella spp",
  "Shigella spp",
  "Yersinia spp",
  "Hafnia alvei",
  "Providencia spp",
  "Providencia alcalifaciens",
  "Aeromonas caviae",
  "Comamonas kerstersii",
];

module.exports.initializeTypes = function () {
  const fs = require("fs");

  const path = "test-types.json";

  try {
    if (fs.existsSync(path)) {
      console.log("Configuration file exists - loading");

      fs.readFile(path, (err, data) => {
        if (err) {
          throw err;
        }
        global.testTypes = JSON.parse(data);
      });
    } else {
      console.log("Configuration file doesn't exist - creating");

      const data = {
        anaerobic: ANAEROBIC_BACTERIA,
        fungi: FUNGI,
        gramMinus: GRAM_MINUS_BACTERIA,
        gramPlus: GRAM_PLUS_BACTERIA,
      };

      const jsonData = JSON.stringify(data, null, 2);

      fs.writeFile(path, jsonData, (err) => {
        if (err) {
          throw err;
        }
        global.testTypes = data;
        console.log("Data written to file");
      });
    }
  } catch (err) {
    console.error(err);
  }
};
