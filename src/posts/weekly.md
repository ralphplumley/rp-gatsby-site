---
title: "Weekly Progress"
date: "2020-11-12"
---

## Mar. 1 ~ Mar. 7 | Week 9 2021

### Vim commands of the week:

- `/pattern<CR>` - Scan document for next match
- `?pattern<CR>` - Scan document for previous match
- `:s/target/replacement` - Search and replacement. The cursor needs to be on the line. `&` for repeat `u` for reverse
- `:%s/foo/bar/g` - replace foo with bar thourough out the file

### Goals for next week

- 21 different LeetCode problems (Grokking Interviews, Leetcode)
- Take notes on first 3 sections of [Advanced Javascript concepts](https://www.udemy.com/course/advanced-javascript-concepts/)
- Begin K&R C book (1 chapter?)
- Start Kent Dodds Testing course

---

## Feb. 22 ~ Feb. 28 | Week 8 2021

### Vim commands of the week:

- `daw` - delete whole word (without rogue character left)
- `gg=G` - auto indent whole file

### Goals for next week

- Get through Week 5 of Skiena Algo Book / Class (and keep implementing Algos in javascript)
- 21 different LeetCode problems (Grokking Interviews, Leetcode)
- Take notes on first 3 sections of [Advanced Javascript concepts](https://www.udemy.com/course/advanced-javascript-concepts/)
- Maybe implement Tailwind to this site

---

## Feb. 1 ~ Feb. 7 | Week 5 2021

### Vim commands of the week:

- `g~` - swap case
- `gu` - make lowercase
- `gU` - make uppercase
- `gUw` - make uppercase whole word
- `gUU` - make uppercase entire line
- `gUap` - make uppercase entire paragraph
- `gcap` - comment out paragraph

### Goals for next week

- Get through Week 4 of Skiena Algo Book / Class
- 21 different LeetCode problems
- Start 1 practice interview weekly (pramp, colleagues, friends)

---

## Jan. 25 ~ Jan. 31 | Week 4 2021

### Vim command of the week:

- `dap` - delete entire paragraph

### Goals for next week

- Get through Week 3 of Skiena Algo Book / Class
- 21 different LeetCode problems
- Get through 1 o'reilly book on fullstack webdev with Go (TBD)

---

We had our first baby. December was baby prep 👶

---

## Nov. 30 ~ Dec. 6 | Week 49

Vim command of the week:

- `{` - jump paragraph to the left
- `}` - jump paragraph to the right (how did I miss these early on?!)

### Tinkered & Learned

- Worked a lot making an ETL pipeline for Rocket Loans. Want to make the [Cloud Challenege one too](https://acloudguru.com/blog/engineering/cloudguruchallenge-python-aws-etl)

---

## Nov. 23 ~ Nov. 29 | Week 48

Vim command of the week:

- `:%s/foo/bar/g` - replace foo with bar globally
- `<c-x> and <c-a>` - jump to the next number, and decrement or increment
- `180<C-x>` - while jumping to the next number, replace it with 180

### Tinkered & Learned

Even more CDK work. Specifically with AWS Glue.

### Goals for next week

- Standard VIM command of the week
- Complete CI/CD for this blog
- Get through two or three Cantrill AWS course sections.

---

## Nov. 16 ~ Nov. 22 | Week 47

### Tinkered & Learned

- More CDK

### Goals for next week

- Standard VIM command of the week
- Complete CI/CD for this blog
- Get through two or three Cantrill AWS course sections.

---

## Nov. 9 ~ Nov. 15 | Week 46

Vim command of the week: `/` and general search. `n` and `N` to find next and previous.

### Tinkered & Learned

- aws apigateway: setup simple api
- aws lambda: read documentation, reads a DynamoDB table, increments number, writes to db
- aws CDK: Using TypeScript to script everything in aws. Interesting tool, but seems nascent; not too much support online. The CDK team is responsive on github, though.

### Reading

- Pro Git: 2.3 Viewing commit history, 2.4 Undoing things
- The DevOps handbook

### Study

- Stephen Marrek AWS Udemy course: complete VPC section.
- TutDojo sample test: complete 1 review session, review incorrect questions.
