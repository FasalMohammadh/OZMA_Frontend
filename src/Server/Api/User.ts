import axios from 'axios'

import { type Contribution } from '@/Page/AccountDetails'

import { SERVER_URL } from '@/Server/config'

interface User {
  fullName: string
  dob: string
  email: string
  mobileNumber: string
  nic: string
  address: string
  olYear: number
  profession: string | null
  indexNo: string | null
  photoUrl: string
  signatureFileUrl: string
  partOfSmf: boolean
  contributionToOzma: Contribution[]
}

const userApi = {
  async create (user: User) {
    return await axios.post(`${SERVER_URL}/user`, user)
  }
}

export default userApi
export type { User }
