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
Welcome.<br> 
Not a technical look, but a look at some of the language used, our assumptions about that language.<br>
we all have ideas about what words mean. <br>
We’ll examine how a few ordinary words are redefined so new behaviour becomes possible.<br>
Meanings of words I want to explore.<br>
As I read and re-read the WP, I kept finding more.<br>
This is my first attempt.<br>

---

> "I had to write all the code before I could convince myself that I could solve every problem, then I wrote the paper."

<small>Satoshi Nakamoto, 09/11/2008</small>

Code before Words **=** Language Engineering

Notes:
i find it fascinating it was code first. <br>
because of this, its map not manifesto.<br>
Or field notes.<br>
Text is sparse and functional .<br>
Words as design primitives, whose meaning is set by their role.<br>
Thus Language Engineering.<br>
words may not mean what you think they do.

---

## What are we really talking about?

"How much bitcoin do you have?"
<img src="assets/images/TwanHuysChristineLagard.jpg" style="width:35%; float:right;">

<span class="fragment">Not just possession, **participation**</span>  

<small>Source: [@SwissHodler on X](https://x.com/SwissHodler/status/1975561828509077913)  
Twan Huys interview with Christine Lagarde, 2 October 2025 at De Nederlandsche Bank, Amsterdam</small>

Note: 
from a talk. most interesting, question from host.<br>
not only a very personal question.<br>
REVEAL.<br>
but it only looks at possession, not participation.<br>
an illustration of how words matter.<br>
with that in mind, lets look at just the title.<br>

Possible Pivot: instead of *how much*, ask *what rules does your money obey?*

---

> A Peer-to-Peer, Electronic Cash System

Note:
KEY POINT 1<br>
Bitcoin criticisms are tied to the literal assumption here.<br>
I have added a comma there.<br>
to help with understanding what this means. <br>
peer and cash are very loaded nouns.<br>
lets have a deeper look at those words and our assumptions around them.<br>
let's dissect.

---

## Peers

A role under shared rules

Note:
What is a a peer. Classically, a person.<br>
in WP, Peers a role under shared rules.<br>
different roles have different rules.<br>
in a transaction, peers could be people, could be businesses, could be groups, could be countries.<br>
peers are not just the entities involved in the transactions.<br>
but nodes and miners operate in this peer to peer manner.<br>
A peer is defined by behaviour and the rules that codify that, not identity.<br>
Bitcoin doesn't care who you are.

---

## The Confusion of Roger Ver

<img src="assets/images/rogerver.jpg">

Note: 
Bitcoin doesnt even care if you're RV.<br>
Roger Ver's big mistake was reading the title too literally.<br>
he couldnt broaden his understanding of the word peer, or indeed cash.<br>
Hence forks. (74 at forkdrop.io).

---

## Cash

Finality + Self Custody

Note:
cash is the other loaded noun<br>
the primitive thought of cash.<br>
the idea of cash being a £10 or whatever. <br>
Cash is a physical representation of finality + self custody.<br>
"Cold Hard Cash" resonates, it's physical, it's property.<br>
it's in your hand<br>


---

<img src="assets/images/moneybank.jpg">

## **Words** matter

Notes:
The money in your bank, it's not money, it's not yours, it's not in the bank.<br>

Cash in hand is what people think about.<br>
and that translates in their minds to directly whats going on in a bank.<br>
but there's no man in a bowler hat with a box.<br>
Cash and money gets conflated. <br>
so peer to peer electronic cash is quite a nuanced idea and the words in that statement are doing a lot more work than we might think at first.<br>
but cash is only mentioned twice in the WP so it's easy to get hung up on it<br>
would history have been different had Satoshi called it "electronic money"<br>
but it's that finality and self custody that Satoshi is referencing by his use of the word cash<br>
to me, it feels an emotive, cultural term<br> 

With all this, whats the correct response when CL asks, how much bitcoin do you have?

---

## You don't have bitcoin
You **own** bitcoin

Note:
WP defines a coin as a chain of digital signatures, how is that cash?<br>
It becomes very hard to think about this using conventional ways of thinking.<br>
I hope i've given you a flavour so far, that the complexities of the whitepaper, are not just in the concepts and math but in the definition of very basic words.<br>
Let's look at one of the key definitions.

---

## Transactions and Homonyms

<img class="img-vh h-50vh" src="assets/images/transactions69.jpg">

Note:
KEY POINT 3<br>
transactions mentioned 69 times in the whitepaper. <br>
a lot of misunderstanding around bitcoin come from homonyms; words with same spelling but different meanings; bat, nail, palm, ring, etc.. <br>
but what is a transaction?. <br>
financial transactions. <br>
legal transactions (marriage, divorce). <br>
property transactions (land registry and titles). <br>
social transactions (using TA, unit of interaction, one persons stimulus another . response).<br> 
i had though of bitcoin in terms of databases (but you can't rollback). <br>

what kind?<br>
a new kind that reassigns control.<br>
transactions take the chain of digital signatures and not just describe it but change it.<br>
when you own btc you have the pointers to that transaction.<br>
it's a Proof of Ownership, secured by Proof of work.<br>
so the meaning of single words changes<br>
and the meaning of phrases can change too<br>
lets look at a key phrase in the WP....<br>

---

## **Ongoing** Proof-of-Work

Not just the work, but the history of it<br>
A paid‑for memory

<span class="fragment"><img class="img-vh h-40vh" src="assets/images/claytablet.png"></span>

Note:
KEY POINT<br>
quote: The network timestamps transactions by hashing them into an ongoing chain of proof-of-work.<br>
it's not just proof in isolation.<br>
the history is important.<br>
thats also why this pres isn't a powerpoint, github, see commits, see other work.<br>
so you can see the history<br>
if we go back.<br>
earliest writing is ledgers, records of transactions, spreadsheets basically.<br>
REVEAL.<br>
ancient Mesopotamia around 3400 BC.<br>
Clay was hard to write but easy to read. <br>
So that gives you an idea of the complexity of what we think are simple words and phrases.<br>
But there's something interesting here, satoshi gave us help, the hyphens.<br>
Mention their prevalence in the WP and how no one else adopts this convention.<br>
Satoshi adopting an existing term and nailing down its Bitcoin-specific meaning.

---

## Hyphenation signals the new "form of life"

"Proof **—** of **—** Work"<br>
"Peer **—** to **—** Peer"<br>

Note: 
I've borrowed a phrase from Wittgenstein, forms of life.<br>
the shared background of human cultural practices, activities, and ways of living that provide the context within which language and meaning operate.  <br>
or perhaps you might say the shared code that provides the context for the language in the whitepaper.<br>
These terms are nothing new, they way they are used is new<br>
that creates confusion as Roger Vers misguided conclusion demonstrates.<br>
The hyphenation is Satoshi giving us that pointer to the new culture.
new in sometimes quite a radical and deep way, which is what I've been trying to get at<br>

---

## Meaning-As-Use

> the meaning of a word is its use in the language

<small>Philosophical Investigations (1953), Ludwig Wittgenstein</small>

Note:
DONT READ.  <br>
that's what I've tried to explore here.<br>
is the difficulties of language and meaning.<br>
which LW explores in PI. he talks about the use theory of meaning, the words are not defined by reference to the objects they designate or by the mental representations one might associate with them, but by how they are used.<br>
the thing that the word stands for does not give the meaning of the word.<br>
it's the use that fixes the meaning.<br>
Hyphenation ("proof-of-work", "peer-to-peer") binds the new meanings into a single unit of action.<br>
We name a thing—proof-of-work, peer-to-peer—not as decoration but as engineered language<br>
it's a new thing, it's not three words but one new word. and quite a radical one<br>

---

## Would Wittgenstein be a Bitcoiner?

<img class="img-vh h-40vh" src="assets/images/wittgenstein.png">


Note:
not sure, be fascinated a pristine example of how names + rules + public tests (double spend solution) create new social facts. <br>
how engineered langauge, and the code with it, can constitute a new practice.<br>
This is my view<br>
I've barely scratched the surface, I've looked at the title and one sentance in the WP in this talk<br>
I’m offering a frame for reading the paper: inside theres language that does work, code that carries meaning, and a network, a culture that hardens both into practice.<br>
it's not the language we are used to, and we might have to learn new definitions for words and new words entirely from existing words. that's the real challenge

---

## References & Repo
- **Live Slides**: [talks.biscuits.lol](https://talks.biscuits.lol)
- **Source Code**: [github.com/OMGBiscuits/whitepaper-philosophy](https://github.com/OMGBiscuits/whitepaper-philosophy)

Notes:
It’s no coincidence this talk lives on GitHub. It’s my own proof-of-work.<br>
If you think I’ve missed the mark, open an issue.<br>
If you can strengthen the argument, raise a PR.<br>
If you want to take it in a new direction, fork it—infra, content, or both.<br>
Because in Bitcoin—and in discourse—the only authority that matters is the test we’re willing to run in public.
