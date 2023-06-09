import {Client, Account, Databases} from 'appwrite'

const client = new Client();

// client.setEndpoint("https://cloud.appwrite.io/v1").setProject("6481b0eb26f4b68434cc")
client.setEndpoint("https://cloud.appwrite.io/v1").setProject(process.env.PROJECT_ID)

export const account = new Account(client)

//Database

// export const databases = new Databases(client, "6481b13459015a21109c")
export const databases = new Databases(client, process.env.DATABASE_ID)


