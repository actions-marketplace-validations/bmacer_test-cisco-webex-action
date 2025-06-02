# Webex Message GitHub Action

This GitHub Action allows you to send messages to Cisco Webex rooms/spaces as part of your GitHub workflow.

## Prerequisites

1. A Webex Bot token or User token
2. The Room ID of the Webex space where you want to send messages

## Usage

Add the following to your GitHub workflow:

```yaml
- name: Send Webex Message
  uses: your-username/webex-message-action@v1
  with:
    webex-token: ${{ secrets.WEBEX_TOKEN }}
    room-id: ${{ secrets.WEBEX_ROOM_ID }}
    message: "Your message here"
```

## Inputs

| Input | Description | Required |
|-------|-------------|----------|
| `webex-token` | Your Webex Bot or User Token | Yes |
| `room-id` | The ID of the Webex room to send the message to | Yes |
| `message` | The message to send | Yes |

## Setup

1. Create a Webex Bot at [developer.webex.com](https://developer.webex.com/my-apps/new/bot)
2. Get your Bot's access token
3. Get the Room ID of the space where you want to send messages
4. Add these as secrets in your GitHub repository:
   - `WEBEX_TOKEN`
   - `WEBEX_ROOM_ID`

## Example Workflow

```yaml
name: Send Webex Notification
on:
  push:
    branches: [ main ]

jobs:
  notify:
    runs-on: ubuntu-latest
    steps:
      - name: Send Webex Message
        uses: your-username/webex-message-action@v1
        with:
          webex-token: ${{ secrets.WEBEX_TOKEN }}
          room-id: ${{ secrets.WEBEX_ROOM_ID }}
          message: "New commit pushed to main branch!"
```

## License

MIT 