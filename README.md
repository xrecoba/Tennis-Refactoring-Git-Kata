# Git Kata on top of Tennis Refactoring Kata

Imagine your have been working on this code and you have been doing multiple commits "for you" in Tennis1.js. The sequence of commits as it is it's hard to understand by anyone else, so you have decided to clean your commits before pushing.

## One last thing
Before cleaning up your commits, you realized you'd like to add one minor improvement:
* Move Love, Fifteen, Thirty and Forty to constants (don't commit yet)
* Remove unnecessary else’s from Main function (don't commit yet)

Now, save both changes with a commit for each one.

## Oh no! Another last thing
Maybe the condition in the two if's that check if players are even or if we're in the late game could be extracted into a couple of functions to add some semantics. Let's do it:
* Create a function to give semantics to first if (even case)
* Commit the change
* Create another function to give semantics to the second if (late game case).
* A new commit for this change doesn't seem worthy, amend the commit you just created and adapt the message if necessary

## Let's move stuff
There’s a commit which deletes all the tennis Katas in Emily’s repo except for the Javascript-Jest one. 
This commit is one of the last ones, but it would make more sense before the whole refactoring:
* Move that commit to the beginning.

## Wow, I don't need this at all
You see? There's a commit that’s fixing an error introduced in another one.
* Remove both commits as there’s no point in keeping them.

## It's not you, it's me...
A change related to _evenResult_ function slipped into the commit "Refactor late game result to use array". 
* Split the commit in two and move the _evenResult_ change into the previous commit "Rewrite even result to loookup"

## Some commits are tiny
There are some commits which are very small and fine grained. All of a sudden you feel the urge merge them together in one single commit with a higher level of abstraction. 
* Compact some small commits into a bigger one

## Tell a story
The story told by the commits lacks some consistency and somehow this doesn’t seem to be the best way to explain the changes. What about retelling the story as you’d like to read it?

Keep in mind these tips for a good commit:
- Explains the why
- Tells a story as you’d like to read it
- First line has less than 80 chars
- Cohesive
- Doesn’t mix reformatting, refactoring and new code
- Intermediate commits compile
- Has a blank line between subject and body
- Uses imperative in subject and no finishing point
- Has proper spelling
- Not “too” big

Your task:
* Rewrite git history so the story is more readable
* Apply git commit best practices to the messages
* Use [GitMoji](https://gitmoji.dev/) if you please 😊 

## Concepts to practice at every step
Look at them only if you need help 😛.
<details>
           <summary>One last thing</summary>
           <p>Committing part of your changes using stages. An example <a href="https://levelup.gitconnected.com/staging-commits-with-git-add-patch-1eb18849aedb">here</a></p>
</details>
<details>
           <summary>Oh no! another last thing</summary>
           <p><a href="https://git-scm.com/docs/git-commit">Amending</a></p>
</details>
<details>
           <summary>Let's move stuff</summary>
           <p>Move via <a href="https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History">interactive rebase</a></p>
</details>
<details>
           <summary>Wow, I don't need this at all</summary>
           <p>Drop via <a href="https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History">interactive rebase</a></p>
</details>

<details>
           <summary>It's not you, it's me...</summary>
           <p><a href="https://stackoverflow.com/questions/6217156/break-a-previous-commit-into-multiple-commits">Split a commit</a> (be sure to use the commit previous to the one you wanna break) and fixup via <a href="https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History">interactive rebase</a></p>
</details>
<details>
           <summary>Some commits are tiny</summary>
           <p>Squash or fixup via <a href="https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History">interactive rebase</a></p>
</details>
<details>
           <summary>Tell a story</summary>
           <p><a href="https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History">interactive rebase</a></p>
</details>

## Questions to discuss afterwards
* What do you think of your Git history compared to the original one?
* Would it help your "future you" the effort invested in improving the commit story?
* In which task did you struggle the most? Why?
* What is your biggest learning of today (if any)?
- - - -

> Built on top of [Emily Bache's Tennis kata](https://github.com/emilybache/Tennis-Refactoring-Kata), thanks Emily for sharing so much 🙌🙌.
> Here you have her repo readme in case it helps you grab the context of the exercise:

# Tennis Refactoring Kata

Imagine you work for a consultancy company, and one of your colleagues has been doing some work for the Tennis Society. The contract is for 10 hours billable work, and your colleague has spent 8.5 hours working on it. Unfortunately he has now fallen ill. He says he has completed the work, and the tests all pass. Your boss has asked you to take over from him. She wants you to spend an hour or so on the code so she can bill the client for the full 10 hours. She instructs you to tidy up the code a little and perhaps make some notes so you can give your colleague some feedback on his chosen design. You should also prepare to talk to your boss about the value of this refactoring work, over and above the extra billable hours.

There are three versions of this refactoring kata, each with their own design smells and challenges. I suggest you start with the first one, with the class "TennisGame1". The test suite provided is fairly comprehensive, and fast to run. You should not need to change the tests, only run them often as you refactor.

If you like this Kata, you may be interested in [my books](https://leanpub.com/u/emilybache) and website [SammanCoaching.org](https://sammancoaching.org)

## Kata Description

Here is a description of the problem this code is designed to solve: [Tennis Kata](https://sammancoaching.org/kata_descriptions/tennis.html).

## Questions to discuss afterwards

* How did it feel to work with such fast, comprehensive tests?
* Did you make mistakes while refactoring that were caught by the tests?
* If you used a tool to record your test runs, review it. Could you have taken smaller steps? Made fewer refactoring mistakes?
* Did you ever make any refactoring mistakes and then back out your changes? How did it feel to throw away code?
* What would you say to your colleague if they had written this code?
* What would you say to your boss about the value of this refactoring work? Was there more reason to do it over and above the extra billable hour or so?


Credits: Kata created while working for [Volcanic Internet](https://volcanicinternet.com/en/).
