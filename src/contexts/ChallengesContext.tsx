import React, { createContext, ReactNode, useState } from "react";
import challenges from "../../challenges.json";

export type ChallengesProviderProps = {
  children: ReactNode;
};

export type Challenge = {
  type: "body" | "eye";
  description: string;
  amount: number;
};

export type ChallengesContextData = {
  userLevel: number;
  challengesCompleted: number;
  currentExperience: number;
  activeChallenge: Challenge;
  experienceToNextLevel: number;
  startNewChallenge: () => void;
  levelUp: () => void;
  resetChallenge: () => void;
  completeChallenge: () => void;
};

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {
  const [userLevel, setUserLevel] = useState(1);
  const [currentExperience, setCurrenteExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);
  const [activeChallenge, setActiveChallenge] = useState(null);

  const experienceToNextLevel = Math.pow((userLevel + 1) * 4, 2);

  const levelUp = () => setUserLevel(userLevel + 1);

  const startNewChallenge = () => {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];
    setActiveChallenge(challenge);
  };

  const resetChallenge = () => setActiveChallenge(null);

  const completeChallenge = () => {
    const { amount } = activeChallenge;
    let finalExperience = currentExperience + amount;

    if (!activeChallenge) return;

    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel;
      levelUp();
    }

    setCurrenteExperience(finalExperience);
    setActiveChallenge(null);
    setChallengesCompleted(challengesCompleted + 1);
  };

  return (
    <ChallengesContext.Provider
      value={{
        levelUp,
        userLevel,
        challengesCompleted,
        currentExperience,
        startNewChallenge,
        activeChallenge,
        resetChallenge,
        experienceToNextLevel,
        completeChallenge,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
}
