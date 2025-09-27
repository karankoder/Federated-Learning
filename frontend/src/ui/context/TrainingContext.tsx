import {
  createContext,
  useState,
  useContext,
  type ReactNode,
  useEffect,
  useRef,
} from 'react';
import { toast } from 'sonner';

export type TrainingPhase =
  | 'upload'
  | 'assembling'
  | 'payment'
  | 'training'
  | 'completed';

interface ITrainingResult {
  datasetHash?: string;
  chunkCount?: number;
  modelHash?: string;
  weightsHash?: string;
  transactionId?: string;
}

interface ITrainingContext {
  // State
  currentPhase: TrainingPhase;
  isLoading: boolean;
  trainerCount: number;
  activeJobId: string | null;
  result: ITrainingResult | null;
  projectName: string | null;
  trainerNodes: TrainerNodeInfo[];
}

export interface TrainerNodeInfo {
  peer_id: string;
  pub_maddr: string;
  maddr: string;
  role: 'TRAINER' | 'CLIENT';
}

const TrainingContext = createContext<ITrainingContext | undefined>(undefined);

export const TrainingProvider = ({ children }: { children: ReactNode }) => {
  const [currentPhase, setCurrentPhase] = useState<TrainingPhase>('upload');
  const [isLoading, setIsLoading] = useState(false);
  const [trainerCount, setTrainerCount] = useState(0);
  const [activeJobId, setActiveJobId] = useState<string | null>(null);
  const [result, setResult] = useState<ITrainingResult | null>(null);

  const [projectName, setProjectName] = useState<string | null>(null);
  const [trainerNodes, setTrainerNodes] = useState<TrainerNodeInfo[]>([]);
  const activeToastId = useRef<string | number | null>(null);
  const [projectId, setProjectId] = useState<string>('');

  return (
    <TrainingContext.Provider
      value={{
        currentPhase,
        isLoading,
        trainerCount,
        activeJobId,
        result,
        projectName,
        trainerNodes,
      }}
    >
      {children}
    </TrainingContext.Provider>
  );
};

export const useTraining = () => {
  const context = useContext(TrainingContext);
  if (!context) {
    throw new Error('useTraining must be used within a TrainingProvider');
  }
  return context;
};
