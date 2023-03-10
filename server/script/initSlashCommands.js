import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const discordClient = axios.create({
  baseURL: "https://discord.com/api/v8",
  headers: { Authorization: `Bot ${process.env.BOT_TOKEN}` },
});

const userCommand = {
  name: "user",
  description: "View a user's information.",
  options: [
    {
      type: 6,
      name: "user",
      description: "User ID",
      required: true,
    },
  ],
  default_member_permissions: 1099511627776,
  dm_permission: true,
};

const verifyCommand = {
  name: "verify",
  description: "Verify a user",
  options: [
    {
      type: 6,
      name: "user",
      description: "User ID",
      required: true,
    },
  ],
  default_member_permissions: 1099511627776,
  dm_permission: true,
};

function createCommand(command) {
  discordClient.post(
    `/applications/${process.env.DISCORD_ID}/guilds/${process.env.GUILD_ID}/commands`,
    command
  );
}

console.log("Commands are ready!");
createCommand(userCommand);
createCommand(verifyCommand);
