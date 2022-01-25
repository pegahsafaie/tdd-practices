- The goal is to learn how to implement an clean architecture app using tdd.
- Why do we relate these two concept together?
  because we believe that separating layers can lead to simpler, less complicated unit tests.
- We start from the kernel(domain entities) and go up.
- This session we just talk about best xunit practices for domain enties in clean architecture.
- The context of our practices are OOP and .Net

**My biggest confusion after this session**
The course is done in the context of OOP/ .Net/ serverside
It tool a long time for me to structure my mind and think how should i approach my tasks in my way.
I want to bring my understanding into my context. 
That's the only way I can avoid copy pasting and make sure I understood everything.
I guess It will leave me many questions and challenges. but that's fine.
I had two big question. first: can we define domain entities in functional way as well?
and second:  Most of the time we see domain entities in server side development. Can we define domain entities in functional as well
I found two extremelly good articles about these two topics which i just put here:
https://dev.to/bespoyasov/clean-architecture-on-frontend-4311#:~:text=The%20clean%20architecture%20is%20a,transformations%20in%20the%20real%20world.

https://blog.ploeh.dk/2016/03/18/functional-architecture-is-ports-and-adapters/

**Lets define the contexts**
- Arash context
TDD, Clean architecutre, .Net, Server


- My context
Tdd, Clean Architecture, Javascript/Typescript, Node/browser, Functional/OOP

As long as we are working on the domain entities(the core layers of clean architect) it does not matter if I write
server or client code. It would be important in the future sessions and I might be able to do my tasks for both envirenments. but for now, lets stay with these two context:

1- Typescript, Functional
2- Typescript, OOP


**When we talk about DOMAIN ENTITY in the context of clean architecture, what do we talk about?**
  1- the data types of each entity;
  2- the factories for creating each entity, or classes if you write in OOP;
  3- and transformation functions for that data.