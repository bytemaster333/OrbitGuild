export interface Scene {
  id: string;
  bg?: 'library' | 'hall' | 'map' | 'mint' | 'ledger' | 'trial' | 'vault';
  guide?: {
    name?: string;
    avatar?: string;
    text: string;
  };
  paragraphs?: string[];
  actions?: SceneAction[];
  effects?: EffectType[];
}

export interface SceneAction {
  label: string;
  action: 'next' | 'tooltip' | 'effect' | 'openQuiz' | 'openBuilder' | 'trial' | 'restart';
  payload?: any;
  effect?: EffectType;
}

export type EffectType = 
  | 'pageTurn' 
  | 'sparkle' 
  | 'glow' 
  | 'mapGlow'
  | 'coinFlip'
  | 'coinShimmer'
  | 'runeGlow'
  | 'ledgerGlow'
  | 'sealGlow'
  | 'triumph'
  | 'oathGlow'
  | 'vaultShimmer'
  | 'forgeGlow'
  | 'trialGlow'
  | 'mysticalSwirl'
  | 'grandFinale';

export interface StoryData {
  title: string;
  guide: {
    name: string;
    avatar: string;
  };
  scenes: Scene[];
}

export interface TrialState {
  currentChoice: string | null;
  completed: boolean;
  score: number;
}