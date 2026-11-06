import { ReactNode } from "react";

export interface Article {
  slug: string;
  title: string;
  summary: string;
  readTime: string;
  draft: boolean;
  body: () => ReactNode;
}

// Highlighted placeholder for details still to be written
function Todo({ children }: { readonly children: ReactNode }) {
  return <mark className="todo">[{children}]</mark>;
}

export const ARTICLES: Article[] = [
  {
    slug: "one-prompt-setup",
    title: "From an hour of setup to one prompt",
    summary:
      "What I learned building AI tooling for partner developers, and why the most useful test was handing it to someone who isn't an engineer.",
    readTime: "5 min read",
    draft: true,
    body: () => (
      <>
        <p className="article-note">
          The tools described here are internal, so this post stays at the level of approach and lessons rather than
          code or screens.
        </p>

        <p>
          Every partner that builds on our platform starts the same way. Pull the app template, run the install wizard,
          create a new project, push it up, and only then start writing the thing they actually came to build. None of
          those steps is hard. Together they took about an hour, and each one was a place where a new developer could
          end up slightly off from the template everyone else was using.
        </p>
        <p>
          As the one technical point of contact for those partners, I saw that hour over and over. That's what made it
          worth automating.
        </p>

        <h2>Automate the checklist people already follow</h2>
        <p>
          I didn't start by designing a new workflow. I started from the exact steps partners were already doing and
          turned them into Claude Code skills: reusable instructions that encode the template, the setup steps, and our
          platform standards. A partner now prompts once, and the skill pulls a working copy of the template and pushes
          the new project for them.
        </p>
        <p>
          Setup went from about an hour to under ten minutes. The same approach then covered two other chores developers
          used to do by hand: updating specific parts of a widget, and generating preview images.
        </p>
        <p>
          <Todo>Add a sentence on what was hardest to get right when encoding the setup steps</Todo>
        </p>

        <h2>Make review feedback explain itself</h2>
        <p>
          I'm also the final reviewer before a partner's app reaches production. A flat list of review comments
          doesn't tell a developer which ones block a release and which are suggestions, so I built a review skill
          around that distinction.
        </p>
        <p>
          It runs in two modes, one for a single merge request and one for a whole app, and sorts every finding into
          must-fix, should-fix, or can-fix. Each finding says where the problem is and why it matters, so a partner can
          fix it without a round trip to me.
        </p>

        <h2>Test with the least technical person you can find</h2>
        <p>
          Before rolling the skills out more widely, I piloted them with a non-technical user. If someone without an
          engineering background could get from a prompt to a working project, an experienced partner developer
          certainly could.
        </p>
        <p>
          <Todo>What happened in the pilot: where they got stuck, and what surprised you</Todo>
        </p>
        <p>
          Based on the results, I hardened the templates, added guardrails, and tightened the review checks.{" "}
          <Todo>One concrete example of a guardrail or check you added, kept generic</Todo>
        </p>

        <h2>What I'd tell anyone building AI developer tooling</h2>
        <ul>
          <li>
            <strong>Start from the checklist, not a blank page.</strong> The steps people already repeat are the
            highest-value thing to automate, and they come with a built-in definition of done.
          </li>
          <li>
            <strong>Test with someone who doesn't know the shortcuts.</strong> Experienced developers quietly work
            around gaps. Someone new to the platform runs into every one.
          </li>
          <li>
            <strong>Make the output explain itself.</strong> Whether it's a generated project or a review finding, the
            developer should understand what happened and why without asking.
          </li>
        </ul>
        <p>
          <Todo>Closing thought: what you'd build next, or what you'd do differently</Todo>
        </p>
      </>
    ),
  },
];
