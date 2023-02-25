import axios from 'axios'

import { SHOUTOUT_URL } from '@/Server/config'

interface SendOtpResponse {
  referenceId: string
  messageResult: {
    status: string
    description: string
    cost: number
    responses: Array<{
      destination: string
      reference_id: string
      status: string
      cost: number
    }>
  }
}

interface VerifyOtpResponse {
  referenceId: string
  code: string
  statusCode: string
  description: string
}

const otpApi = {
  async send (phoneNumber: `94${string}`, signal?: AbortSignal) {
    if (/^(94)\d{9}/.test(phoneNumber)) {
      const response = await axios.post<SendOtpResponse>(
        `${SHOUTOUT_URL}/send`,
        {
          source: 'OZMA Digital',
          transport: 'sms',
          content: { sms: 'Your code is {{code}}' },
          destination: phoneNumber
        },
        { signal }
      )
      return response.data
    }
    throw new Error("phone number doesn't match the format")
  },

  async verify (code: string, referenceId: string) {
    const response = await axios.post<VerifyOtpResponse>(
      `${SHOUTOUT_URL}/verify`,
      {
        code,
        referenceId
      }
    )
    return response.data
  }
}

export default otpApi
