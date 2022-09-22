This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

```bash
npm run dev
# or
yarn dev
```

# Moralis x Filecoin Hackathon project
## Disclaimer the project is'nt fully completed . We could'nt make the front end dynamic 
## Smart contract repo : https://github.com/umershaikh123/morlis-x-filecoin-SmartContract

## Project : Web3 Fundraising Project
 
 


## Techonlogies used

  Chainlink Keepers  
  <br/>
  NFT.STORAGE
  <br/>
  WEB3.STORAGE
  <br/>
  XMTP
  <br/>
  POLYGON
  <br/>


## what is our project about?

Our project aims to solve the issue of trust, transparency in the isssuance of funds for charity, fundraising, donations etc.
<br/>
<br/>
Organizers/NGOs can create any funding program which they need to raise money.

After filling necessary information in a form such as program details , cause , fund goal etc 
the form data is uploaded to `WEB3.STORAGE` and is stored inside smart contract. 
<br/>
<br/>
As to discourage unnecessary/scam funding projects Organizers have to pay a 0.05% fee of the total fund goal and each project first gets verified by the user and . User can vote for or against any cause .
<br/>
<br/>
The voting is transparent . anyone can see who voted for or against the program 
<br/>
<br/>
We are still looking for better voting mechanism and penalty for malicious users .
<br/>
<br/>
The voting is open and can be done by anyone but each wallet can only vote for a cause once, 
the voting is stoped once the no of votes reached their limit.

then  `chainlink keepers` change the state of the program. 
If the program is verified then it moves to Fund-Raising-State
but if it failed then it moves to Failed-State
<br/>
<br/>
Once the program is in Fund-rasising state the users can finally start donating .
<br/>
<br/>
users can also chat with the organizers about the program using `Xmtp messaging feature` 
<br/>
<br/>
anyone who donates to the cause gets a special `soul-bound nft` made by the organizer of the program.
<br/>
<br/>
There are 3 NFTS . the first one will be given to any users who donate
, the 2nd and 3rd one will be given to users who donated above a certain amount.These values will be set by the organizer when creating the program

<br/>
The funding program is closed when the specified goal has been reached.

# plans moving forward

  * Our main goal is to make sure that the money that is raised , is actually spent for the purpose of the program and people can actaully see
    how their donated money is being used.
  * We plan to implement a standard open dao which with each cause as proposals and ways to incentivize users to verify them
  * we plan to add support for donation of real world asssets or other digital assets
  
  
  ## integrations 
  * chainlink keepers for automating functions in smart contract - https://github.com/umershaikh123/Moralis-x-Filecoin-Hackathon/blob/master/Backend/Hardhat/contracts/funder.sol
  * xmtp for messaging - https://github.com/umershaikh123/moralis-x-filecoin-frontend/blob/main/pages/detailPage/%5Baddress%5D.js
  * web3.storage and NFT.storage to store the users data when a cause is created - https://github.com/umershaikh123/moralis-x-filecoin-frontend/blob/main/pages/Create-new-program.js
  * Moralis for syncing events from our smart contract
  
  
  ## Team members
  
 Me - umershaikh123 (Project Lead , blockchain dev)
 0xWick (Node.Js developer)
 MFaiqKhan (Researcher and blockchain dev)
 olic-hub (Front-end-developer)
 


 
 
