const { client, xml } = require("@xmpp/client");

const xmpp = client({
  service: "xmpp://localhost",
  domain: "localhost",
});

xmpp.on("error", (err) => {
  console.error(err);
});

xmpp.on("offline", () => {
  console.log("offline");
});

xmpp.on("online", async (address) => {
  console.log("online as", address.toString());
});

xmpp.start();
