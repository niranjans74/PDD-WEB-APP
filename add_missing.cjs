require("dotenv").config();
const mongoose = require("mongoose");
const CompanyTopic = require("./models/CompanyTopic");

const companiesData = [
  { name: 'Apple', domain: 'apple.com', topics: { Easy: [], Medium: [], Hard: [] } },
  { name: 'Google', domain: 'google.com', topics: { Easy: [], Medium: [], Hard: [] } },
  { name: 'Microsoft', domain: 'microsoft.com', topics: { Easy: [], Medium: [], Hard: [] } },
  { name: 'Amazon', domain: 'amazon.com', topics: { Easy: [], Medium: [], Hard: [] } },
  { name: 'Meta', domain: 'meta.com', topics: { Easy: [], Medium: [], Hard: [] } },
  { name: 'IBM', domain: 'ibm.com', topics: { Easy: [], Medium: [], Hard: [] } },
  { name: 'JPMorgan', domain: 'jpmorganchase.com', topics: { Easy: [], Medium: [], Hard: [] } },
  { name: 'TCS', domain: 'tcs.com', topics: { Easy: [], Medium: [], Hard: [] } },
  { name: 'Infosys', domain: 'infosys.com', topics: { Easy: [], Medium: [], Hard: [] } },
  { name: 'Wipro', domain: 'wipro.com', topics: { Easy: [], Medium: [], Hard: [] } },
  { name: 'Cognizant', domain: 'cognizant.com', topics: { Easy: [], Medium: [], Hard: [] } },
  { name: 'Accenture', domain: 'accenture.com', topics: { Easy: [], Medium: [], Hard: [] } },
  { name: 'Goldman Sachs', domain: 'goldmansachs.com', topics: { Easy: [], Medium: [], Hard: [] } },
  { name: 'Morgan Stanley', domain: 'morganstanley.com', topics: { Easy: [], Medium: [], Hard: [] } },
  { name: 'Bloomberg', domain: 'bloomberg.com', topics: { Easy: [], Medium: [], Hard: [] } }
];

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to DB...");

    for (const comp of companiesData) {
      await CompanyTopic.updateOne(
        { name: comp.name },
        { $setOnInsert: comp },
        { upsert: true }
      );
    }

    console.log("Added missing companies safely!");
    process.exit(0);
  } catch (error) {
    console.error("Seed error:", error);
    process.exit(1);
  }
};

seedData();
