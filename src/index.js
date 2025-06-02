const core = require('@actions/core');
const axios = require('axios');

async function run() {
  try {
    // Get inputs from action
    const token = core.getInput('webex-token', { required: true });
    const roomId = core.getInput('room-id', { required: true });
    const message = core.getInput('message', { required: true });

    // Send message to Webex
    const response = await axios({
      method: 'post',
      url: 'https://webexapis.com/v1/messages',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      data: {
        roomId: roomId,
        text: message
      }
    });

    if (response.status === 200) {
      core.info('Message sent successfully to Webex');
    } else {
      throw new Error(`Failed to send message. Status: ${response.status}`);
    }
  } catch (error) {
    core.setFailed(error.message);
  }
}

run(); 