This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

```bash
npm run dev
# or
yarn dev
```

# Moralis x Filecoin Hackathon project
## Disclaimer the project is'nt fully completed . We could'nt make the front end dynamic 

<br/>

## Smart contract repo : https://github.com/umershaikh123/morlis-x-filecoin-SmartContract
<br/>

## Designs : https://www.figma.com/file/y6DAZMsWFNriJaF4Ol2lP9/Daily-UI---Day-01-(Community)?node-id=792%3A1026
## Project : Web3 Fundraising Project
 
 


## Techonlogies used

  Chainlink Keepers   
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
As to discourage unnecessary/scam funding projects Organizers have to pay a 0.005 % fee of the total fund goal and each project first gets verified by the user and . User can vote for or against any cause .
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
  ### Chainlink keepers for automating functions in smart contract
      https://github.com/umershaikh123/morlis-x-filecoin-SmartContract/blob/main/contracts/Main.sol

Chainlink Keepers are used to change the state of the program.
<br/>
<br/>
Each program have 4 states . 
Verifying state , Fund Raising State , Complete State and Failed State
<br/>
<br/>
Depending on certain conditions like voting , fund raising time , No of votes completed , Fund Goal completed
<br/>



  ### xmtp for messaging 
      https://github.com/umershaikh123/moralis-x-filecoin-frontend/blob/main/pages/detailPage/%5Baddress%5D.js
  Users can message organizers thorugh XMTP
  
 ### Filecoin , web3.storage and NFT.storage 
     https://github.com/umershaikh123/moralis-x-filecoin-frontend/blob/main/pages/Create-new-program.js
     
 <br/>
 Web3 Storage : For storing Form data 
 <br/>
 NFT Storage : For Storing NFTS 
 
 ### Moralis for syncing events from our smart contract (Not implemented)
 ### Polygon for scalibility
 <br/>
 <hr>
  
 ## Detailed project working
 
In our project we have the organizer of the funding programs and users who can donate , vote (verify) program.
<br/>
<br/>
Each user will have their own profile which will show all the programs that he donated to and all the `soul bound NFTS` he recieved
<br/>
<br/>
Similarly the organizers will also have their own section which will show all the programs that they have created so far
<br/>
<br/>
Firstly an organizer creates a new funding project by clicking the create new program button which opens up a form
the organizer writes detail of the program and NFTs that will be rewarded to the users .
<br/>
<br/>
The organizer has to pay 0.005 % fee a fraction of fundGoal to create a new funding program. This reduces the chances of scammers trying to create fake programs.
<br/>
<br/>
If the program fails for some reason then the fees will be refunded to the organizer
<br/>
<br/>

## verifying stage

Okay now that the organizer has submited the form , payed the fees .
The program goes in Verifying state. Now the users can vote for or against the program .
<br/>
<br/>
The voting time , No of Votes might be different depending on the FundGoal.
<br/>
<br/>
All the votes are transparent and are shown on the verfying page.
<br/>
<br/>
We implemented a very simple voting system but we can improve it a lot.
<br/>
<br/>
Another approach we thought was that there will be people called 'verifiers' who would stake some Eth/or any coin
and only they can vote for the program 
<br/>
<br/>
If they voted wrong then their saking coin would be slash but if they are right they will get a reward in our own crypto currency
<br/>
<br/>
Users can see the details of the program by clicking the Cardview of the program , they can chat with the 
organizer using `XMTP messaging`
<br/>
<br/>
Now if the program gets reached its voting limit the `chainlink keepers` will check certain conditons and change the state of the program.
<br/>
<br/>
If the program succeded in verifying it will move to Fund Raising State otherwise it will move to Failed State


## Fund Raising stage

Now that the program is in the fund raising state . Users can donate Crypto to the organizer of the program.
all donations are shown on the page
<br/>
<br/>
The users can be rewarded upto 3 `Soul Bound NFT` if they donate at a above a certain value.
<br/>
<br/>
The first NFT will be given to all user who donate any amount

## Complete State





 
  ## Team members
  
 Me - umershaikh123 (Project Lead , blockchain dev)
 <br/>
 0xWick (Node.Js developer)
 <br/>
 MFaiqKhan (Researcher and blockchain dev)
 <br/>
 olic-hub (Front-end-developer)
 


 
 
