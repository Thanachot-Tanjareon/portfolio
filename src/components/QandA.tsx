'use client';
import React from "react";
// --- styled-components. ---
import { ContentWrapper } from "@/components/partials/ContentWrapper";
import { Title } from "@/components/partials/text/Title";
import { QandAContainer } from "@/components/partials/Q&A/QandAContainer";
import { Question } from "@/components/partials/Q&A/Question";
import { Answer } from "@/components/partials/Q&A/Answer";


const QandA = (): JSX.Element => {
  const question_and_answer: { question: string, answer: string }[] = [
    {
      question: "What are you like programming languages? why?",
      answer: "I very like the TypeScript because it easy to learn if you had learned the JavaScript, it can writed with OOP concept which in this language had the four principles in the OOP and this had types sefty variables for writing a program."
    },
    {
      question: "What's you inspired for learn to write a program?",
      answer: "when I still learned at grade 8, I want to create something to modify things in the Minecraft."
    },
    {
      question: "Why do you love to write a program?",
      answer: "I love it because coding is magic to solving some problem or create a tools for useful in my life and other."
    }
  ];

  return(
    <ContentWrapper>
      <Title>Questions and Answer</Title>
      {question_and_answer.map((q_and_a: { question: string, answer: string }, index: number) => {
        return(
          <QandAContainer key={index}>
            <Question>{ q_and_a.question }</Question>
            <Answer>{ q_and_a.answer }</Answer>
          </QandAContainer>
        );
      })}
    </ContentWrapper>
  );
}

export default QandA;
