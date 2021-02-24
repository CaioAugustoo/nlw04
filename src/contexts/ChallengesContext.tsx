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
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
}
