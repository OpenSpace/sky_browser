const express = require("express");
const app = express();
const port = 9000;

app.use("/1/gui", express.static("public_gui"));
app.use("/1/openspace", express.static("public_openspace_v1"));
app.use("/2/openspace", express.static("public_openspace_v2"));
app.use(express.static("../sky_browser_rel/public"));
app.listen(port, () => {});
