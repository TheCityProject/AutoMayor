# AutoMayor
An efficient, multi-purpose Discord bot that manages The City Project server.

### Prerequisites & Setup

* Download and install [Node.js LTS](https://nodejs.org/).
* Clone this repository.
* Create a copy of `.env.example` and rename the copy to `.env`.
    * Populate the values with a valid [Discord bot token](https://discord.com/developers/applications) and application ID.
* Run `npm install --production` in the terminal.
* Run `npm deploy` and `npm start` in the terminal. The bot will be online after a brief delay.
    * The `deploy` script should only be used once and when new commands has been added.

#### Securing the Bot

It is recommended that you follow the principle of least privilege, where the bot should only have certain permissions
needed to complete its tasks. This means avoiding the "Administrator" permission and instead, giving individuals based
on what commands it has.

At the moment, it will require these permissions to be enabled:
* Kick Members
* Ban Members
* Timeout Members
* Send Messages
* Send Messages in Thread
* Embed Links
* Attach Files
* Add Reactions
* Manage Messages (can be set on a per-channel basis)
* Manage Threads
* Mute Members
* Deafen Members