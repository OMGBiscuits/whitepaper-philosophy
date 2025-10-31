---
title: "Bitcoin: A Philosophical Look at the Whitepaper"
revealOptions:
  transition: 'fade'
  hash: true
  slideNumber: true
  controls: true
  progress: true
---

# The Philosophy of the Whitepaper 



Note:
Welcome. 
Not a technical look, but a look at some of the language used, our assumptions about that language
We’ll examine how a few ordinary words, cash, peer, trust, proof, timestamp, are redefined so new behaviour becomes possible.

Meanings of words I want to explore.
As I read and re-read the WP, I kept finding more
This is my first attempt
What is a WP? a structured document that explains a problem and a solution.
---

> "I had to write all the code before I could convince myself that I could solve every problem, then I wrote the paper."

Code before Words **=** Language Engineering

Notes: because it was written before, map not manifesto
Treat the words as design primitives
Thus Language Engineering
---

## What are we really talking about?

"How much bitcoin do you have?"
<img src="assets/images/TwanHuysChristineLagard.jpg" style="width:35%; float:right;">

<span class="fragment">Not just possession, **participation**</span>  

<small>*Source: [@SwissHodler on X](https://x.com/SwissHodler/status/1975561828509077913)*  
*Twan Huys interview with Christine Lagarde, 2 October 2025 at De Nederlandsche Bank, Amsterdam*</small>

Note: 
from a talk. most interesting, question from host.
very personal question. 
it represents a failure for them to price it.
Use the story to show why the holdings question is socially unsafe. Pivot: instead of *how much*, ask *what rules does your money obey?*

an illustration of how words matter.

"What is the value of it?"
value is money amount
money amount is an expression of needs

---

The money in your bank, it's not money, it's not yours, it's not in the bank
<img src="/assets/images/moneybank.jpg">

## **Words** matter

Notes:
Cash in hand is what people think about
and that translates in their minds to directly whats going on in a bank
as a child you might have that cash

---

> A Peer-to-Peer, Electronic Cash System

<img src="/assets/images/rogerver.jpg">

Note:
Key 1
Bitcoins failure is tied to the literal assumption here.
Roger Ver's big mistake was reading this too literally
Hence forks. (74 at forkdrop.io)
I might have added a comma there

let's dissect.

---

## Peers

A role under shared rules

Note:
Peers a role under shared rules (any agent that follows/relays/validates)
peers are not just the people involved in the transactions
the nodes the miners 
Peers could be people, could be businesses, could be groups, could be countries
A peer is defined by behaviour, not identity
Bitcoin doesn't care

---

## Cash

Finality + Self Custody

Note:
the primitive thought of cash

Cash is a representation of finality + self custody, not an actual item.
"Cold Hard Cash" physicality, property

---

> Completely non-reversible transactions are not really possible

Why is that important?
non-reversible important for non-reversible services 

Note:
"since financial institutions cannot avoid mediating disputes"
reframes refunds/protections as opt‑in services on top of a predictable base
large part of the abstract is about solution to the double spend problem
Full and final settlement reduces seller risk, buyers are protected by contract or escrow
Why is this important? or desirable?
how do you deal with guarantee - routine escrow or multisig. consumer protection through contract

---
<span style="width:50%; float:right;" >![](/assets/images/homonyms-in-english-types-meanings-examples-homophones-and-homographs-common-homonyms-learn-english-grammar-vocabulary-lesson-esl-vocaberry.png)</span>
## Transactions and Homonyms

Note:
key 2
bat, 
transactions mentioned 69 times in the whitepaper
but what is a transaction?
in terms of money?
then in terms of ideas and products
then in terms of databases


---
## Trust is a **tax**

Note:
from the introduction
"While the system works well enough for
most transactions, it still suffers from the inherent weaknesses of the trust based model."
There is a cost to paying for the goods and services
How do you move out of your local trust based dunbar number to something bigger. Well you trust a larger network
discretion and chargebacks are valuable *when chosen*, but costly if universal
refunds/protections as opt‑in services on top of a predictable base

---

## You don't have bitcoin
You **own** it


Note:
this is where the cash analogy breaks down for me
the transaction is just an update to the database
you have the pointers to that transaction
chain of signatures that points to who can spend next
Proof of Ownership

---

## **Ongoing** Proof-of-Work

Not just the work, but the history of it<br>
A paid‑for memory

<span class="fragment" style="width:50%; float:right;" >![](/assets/images/claytablet.png)</span>


Note: "The network timestamps transactions by hashing them into an ongoing chain of proof-of-work"
it's not just proof in isolation
it's no coincidence that this isn't a powerpoint, github, see commits, see other work.
earliest writing is ledgers, records of transactions, spreadsheets basically.
Clay was hard to write but easy to read.
But there's something interesting here, the hyphens
Satoshi adopting an existing term and nailing down its Bitcoin-specific meaning.

--- 

## Hyphenation signals the new "form of life"

Proof**-**of**-**Work<br>
Peer**-**to**-**Peer<br>

Note: 
Wittgenstein, definitions emerge from what he termed forms of life, roughly the culture and society in which they are used.
The hyphenation is Satoshi giving us that pointer to the new culture

---

## Meaning-is-Use
> the meaning of a word is its use in the language
<small>*Philosophical Investigations (1953), Ludwig Wittgenstein*</small>

Note: 
the book is about the difficulties of language and meaning
that's what I've tried to explore here
LW argues words are how you use it, not it's definition
the thing that the word stands for does not give the meaning of the word.
The use fixes the meaning
Hyphenation ("proof-of-work") binds the new meanings into a single unit of action

---

## Would Wittgenstein be a Bitcoiner?

Note:
not sure, be fascinated a pristine example of how names + rules + public tests (double spend solution) create new social facts
how engineered langauge, and the code with it, can constitute a new practice
am I going to far? putting words into Satoshi's mouth?
I'm just hoping to give you one framework to think about not just the whitepaper but any idea

it's no coincidence that this talk is on github, this is my own proof of work
whether you disagree or think my words could be strengthened, im open to pull requests
you could even fork this repo, either for the technical infrastructure, the content, or both

---

## References & Repo
- **Live Slides**: [talks.biscuits.lol](https://talks.biscuits.lol)
- **Download PDF**: [whitepaper-philosophy.pdf](whitepaper-philosophy.pdf)
- **Download PPTX**: [whitepaper-philosophy.pptx](whitepaper-philosophy.pptx)
- **Source Code**: [github.com/OMGBiscuits/whitepaper-philosophy](https://github.com/OMGBiscuits/whitepaper-philosophy)

