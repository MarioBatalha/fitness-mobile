import { ImageSourcePropType } from "react-native";

interface User {
	name: string;
	profile: ImageSourcePropType;
}
export const user: User = {
	name: "Mário Batalha",
	profile: require("../assets/images/avatar.jpeg"),
};

export interface Category {
	id: number;
	name: string;
}

export const categories: Category[] = [
	{
		id: 1,
		name: "Crossfit",
	},
	{
		id: 2,
		name: "Jiu-Jitsu",
	},
	{
		id: 3,
		name: "Kickbox",
	},
	{
		id: 4,
		name: "Judo",
	},
];

interface Exercise {
	id: number;
	name: string;
	time: string;
	image: ImageSourcePropType;
	rep: number;
}

// list of workouts exercises
export const exercises: Exercise[] = [
	{
		id: 1,
		name: "Squats",
		time: "30 seg",
		image: require("../assets/images/exercises/Squats.jpeg"),
		rep: 2,
	},
	{
		id: 2,
		name: "Pushup",
		time: "30 seg",
		image: require("../assets/images/exercises/Pushup.jpeg"),
		rep: 2,
	},
	{
		id: 3,
		name: "Jumping",
		time: "30 seg",
		image: require("../assets/images/exercises/Jumping.jpeg"),
		rep: 2,
	},
];

export interface Workout {
	id: number;
	name: string;
	coach: string;
	image: ImageSourcePropType;
	exercises: Exercise[];
	rating: number;
	minutes: number;
	calories: number;
	description: string;
}

// list of workouts
export const workouts: Workout[] = [
	{
		id: 1,
		name: "Perda de peso",
		coach: "Paulo Bizerra",
		image: require("../assets/images/workouts/gym-man.jpg"),
		exercises,
		rating: 4,
		minutes: 50,
		calories: 350,
		description:
			"Perder peso refere-se ao processo de redução do peso corporal, geralmente com o objetivo de alcançar uma composição corporal mais saudável. Envolve uma combinação de mudanças na dieta, atividade física e adoção de um estilo de vida sustentável.",
	},
	{
		id: 2,
		name: "Ganhar massa muscular",
		coach: "Paulo Bizerra",
		image: require("../assets/images/workouts/gain-muscle.jpeg"),
		exercises,
		rating: 5,
		minutes: 60,
		calories: 50,
		description:
			"Ganhar massa muscular, também conhecido como hipertrofia muscular, envolve aumentar o tamanho e a força de seus músculos por meio de exercícios direcionados e nutrição adequada.",
	},
	{
		id: 3,
		name: "Ficar desfiado",
		coach: "Beatriz Ventura",
		image: require("../assets/images/workouts/get-skredded.jpeg"),
		exercises,
		rating: 5,
		minutes: 45,
		calories: 150,
		description:
			"Ficar desfiado geralmente se refere a atingir um percentual de gordura corporal muito baixo, mantendo ou até mesmo construindo massa muscular magra.",
	},
	{
		id: 4,
		name: "Corpo inteiro",
		coach: "Paulo Bizerra",
		image: require("../assets/images/workouts/fit-woman.jpeg"),
		exercises,
		rating: 5,
		minutes: 60,
		calories: 50,
		description:
			"Os exercícios de corpo inteiro são exercícios que envolvem vários grupos musculares e articulações em uma única sessão",
	},
	{
		id: 5,
		name: "Jiu-Jitsu",
		coach: "Vanio Bernardo",
		image: require("../assets/images/workouts/jiu-jitsu.jpg"),
		exercises,
		rating: 5,
		minutes: 60,
		calories: 50,
		description:
			"O Jiu-Jitsu, também conhecido como Brazilian Jiu-Jitsu (BJJ), é uma arte marcial e esporte de combate que se concentra na luta de chão e técnicas de agarramento.",
	},
	{
		id: 6,
		name: "Kickbox",
		coach: "Edgar",
		image: require("../assets/images/workouts/kickbox.jpg"),
		exercises,
		rating: 5,
		minutes: 60,
		calories: 200,
		description:
			"Kickboxing é um esporte de combate e arte marcial que combina elementos de técnicas de socos e chutes.",
	},
	{
		id: 7,
		name: "Judo",
		coach: "Nakamura",
		image: require("../assets/images/workouts/judo.jpg"),
		exercises,
		rating: 5,
		minutes: 60,
		calories: 50,
		description:
			"O judô é uma arte marcial japonesa moderna e um esporte de combate que se concentra em arremessos, técnicas de luta e submissão.",
	},
];

interface Plan {
	id: number;
	name: string;
	duration: string;
	image: ImageSourcePropType;
	location: string;
	rating: number;
	minutes: number;
	calories: number;
	description: string;
}

// list of workout plans
export const workoutPlans: Plan[] = [
	{
		id: 1,
		name: "Força muscular da perna",
		duration: "8 semanas",
		location: "Casa",
		image: require("../assets/images/workouts/legs.jpg"),
		rating: 5,
		minutes: 45,
		calories: 350,
		description:
			"A força muscular da perna refere-se à capacidade dos músculos da parte inferior do corpo, particularmente das pernas, de gerar força e realizar vários movimentos e atividades.",
	},
	{
		id: 2,
		name: "Body pump",
		duration: "10 semanas",
		location: "Casa",
		image: require("../assets/images/workouts/body-pump.jpg"),
		rating: 5,
		minutes: 52,
		calories: 350,
		description:
			"Body Pump é um popular programa de condicionamento físico em grupo que se concentra no treinamento de força de corpo inteiro usando barras, anilhas e exercícios de alta repetição.",
	},
	{
		id: 3,
		name: "Força muscular dos braços",
		duration: "8 semanas",
		location: "Casa",
		image: require("../assets/images/workouts/arms.jpg"),
		rating: 5,
		minutes: 52,
		calories: 350,
		description:
			"A força muscular do braço refere-se à capacidade dos músculos da parte superior do corpo, particularmente dos braços, de gerar força e realizar vários movimentos e atividades.",
	},
	{
		id: 4,
		name: "Força muscular dos peitos",
		duration: "8 semanas",
		location: "Casa",
		image: require("../assets/images/workouts/chest.jpg"),
		rating: 5,
		minutes: 52,
		calories: 350,
		description:
			"A força muscular do peito refere-se à capacidade dos músculos da região do peito de gerar força e realizar movimentos como empurrar e pressionar.",
	},
	{
		id: 5,
		name: "Força muscular das costas",
		duration: "8 semanas",
		location: "Casa",
		image: require("../assets/images/workouts/back.webp"),
		rating: 5,
		minutes: 52,
		calories: 350,
		description:
			"A força muscular das costas refere-se à capacidade dos músculos das costas de gerar força e realizar movimentos que envolvem puxar, levantar e manter a postura adequada",
	},
];
