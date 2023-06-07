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
export const loseWeightExercises: Exercise[] = [
	{
		id: 1,
		name: "Salto",
		time: "15 min",
		image: require("../assets/images/exercises/lose-weight/rope-jumping.gif"),
		rep: 1,
	},
	{
		id: 2,
		name: "Correr",
		time: "30 min",
		image: require("../assets/images/exercises/lose-weight/running.gif"),
		rep: 1,
	},
	{
		id: 3,
		name: "HIIT",
		time: "30 min",
		image: require("../assets/images/exercises/lose-weight/hiit.gif"),
		rep: 1,
	},
	{
		id: 4,
		name: "Ciclismo",
		time: "30 hora",
		image: require("../assets/images/exercises/lose-weight/cycling.gif"),
		rep: 1,
	},
];

export const gainMuscleExercises: Exercise[] = [
	{
		id: 1,
		name: "Banco de barra",
		time: "5 min",
		image: require("../assets/images/exercises/gain-muscle/barbell-bench.gif"),
		rep: 8,
	},
	{
		id: 2,
		name: "levantamento terra com barra",
		time: "5 min",
		image: require("../assets/images/exercises/gain-muscle/barbell-deadlift.gif"),
		rep: 8,
	},
	{
		id: 3,
		name: "Agachamento com barra",
		time: "5 min",
		image: require("../assets/images/exercises/gain-muscle/barbell-squats.gif"),
		rep: 8,
	},
	{
		id: 4,
		name: "Flexão",
		time: "5 min",
		image: require("../assets/images/exercises/gain-muscle/pushup.gif"),
		rep: 8,
	},
	{
		id: 5,
		name: "Puxar para cima",
		time: "5 min",
		image: require("../assets/images/exercises/gain-muscle/pullup.gif"),
		rep: 8,
	},
	{
		id: 6,
		name: "Agachamento cálice",
		time: "5 min",
		image: require("../assets/images/exercises/gain-muscle/dumbbell-goblet.gif"),
		rep: 8,
	},
];

export const getSkreddedExercises: Exercise[] = [
	{
		id: 1,
		name: "Levantamento terra com barra",
		time: "5 min",
		image: require("../assets/images/exercises/get-shredded/barbell-deadlift.gif"),
		rep: 10,
	},
		{
		id: 2,
		name: "Bent over",
		time: "5 min",
		image: require("../assets/images/exercises/get-shredded/bentover.gif"),
		rep: 8,
	},
		{
		id: 3,
		name: "Chinups",
		time: "5 min",
		image: require("../assets/images/exercises/get-shredded/chinups.gif"),
		rep: 8,
	},
		{
		id: 4,
		name: "Estocadas",
		time: "5 min",
		image: require("../assets/images/exercises/get-shredded/lunges.gif"),
		rep: 8,
	},
		{
		id: 5,
		name: "Levantamento olímpico",
		time: "5 min",
		image: require("../assets/images/exercises/get-shredded/pullup.gif"),
		rep: 8,
	},
		{
		id: 6,
		name: "Rack pulls",
		time: "5 min",
		image: require("../assets/images/exercises/get-shredded/rack-pulls.gif"),
		rep: 15,
	},
		{
		id: 7,
		name: "Snatches",
		time: "5 min",
		image: require("../assets/images/exercises/get-shredded/snatch.gif"),
		rep: 10,
	},
		{
		id: 8,
		name: "Agachamento dividido",
		time: "5 min",
		image: require("../assets/images/exercises/get-shredded/split-squats.gif"),
		rep: 8,
	},
		{
		id: 9,
		name: "Agachamentos",
		time: "5 min",
		image: require("../assets/images/exercises/get-shredded/squats.gif"),
		rep: 8,
	},
		{
		id: 10,
		name: "Standing overhead",
		time: "5 min",
		image: require("../assets/images/exercises/get-shredded/standing-overhead.gif"),
		rep: 8,
	}
	];

	export const fullBodyExercises: Exercise[] = [
	{
		id: 1,
		name: "Burpees",
		time: "5 min",
		image: require("../assets/images/exercises/full-body/burpees.gif"),
		rep: 8,
	},
	{
		id: 2,
		name: "Ciclismo",
		time: "5 min",
		image: require("../assets/images/exercises/full-body/cycling.gif"),
		rep: 8,
	},
	{
		id: 3,
		name: "Lunges",
		time: "5 min",
		image: require("../assets/images/exercises/full-body/lunges.gif"),
		rep: 8,
	},
	{
		id: 4,
		name: "Flexões",
		time: "5 min",
		image: require("../assets/images/exercises/full-body/pushup.gif"),
		rep: 8,
	},
	{
		id: 5,
		name: "Correr",
		time: "5 min",
		image: require("../assets/images/exercises/full-body/running.gif"),
		rep: 8,
	},
	{
		id: 6,
		name: "Agachamento",
		time: "5 min",
		image: require("../assets/images/exercises/full-body/squats.gif"),
		rep: 8,
	},
	{
		id: 7,
		name: "Subir escadas",
		time: "5 min",
		image: require("../assets/images/exercises/full-body/stair-climbing.gif"),
		rep: 8,
	},
];

	export const jiuJitsuExercises: Exercise[] = [
			{
			id: 1,
			name: "Braços",
			time: "5 min",
			image: require("../assets/images/exercises/jiu-jitsu/arms.gif"),
			rep: 50,
		},
			{
			id: 2,
			name: "Pernas",
			time: "5 min",
			image: require("../assets/images/exercises/jiu-jitsu/butt-kicks.gif"),
			rep: 50,
		},
			{
			id: 3,
			name: "Joelhos altos",
			time: "5 min",
			image: require("../assets/images/exercises/jiu-jitsu/high-knee.gif"),
			rep: 20,
		},
			{
			id: 4,
			name: "Leg swing",
			time: "5 min",
			image: require("../assets/images/exercises/jiu-jitsu/leg-swing.gif"),
			rep: 20,
		},
			{
			id: 5,
			name: "Estrangulamento",
			time: "5 min",
			image: require("../assets/images/exercises/jiu-jitsu/estrangulamento.gif"),
			rep: 1,
		},
			{
			id: 6,
			name: "Guarda arranha",
			time: "5 min",
			image: require("../assets/images/exercises/jiu-jitsu/guarda-aranha.gif"),
			rep: 1,
		},
		{
			id: 7,
			name: "Guarda",
			time: "5 min",
			image: require("../assets/images/exercises/jiu-jitsu/guarda.gif"),
			rep: 1,
		},
		{
			id: 8,
			name: "Montada",
			time: "5 min",
			image: require("../assets/images/exercises/jiu-jitsu/montada.gif"),
			rep: 1,
		},
		{
			id: 9,
			name: "Raspagem",
			time: "5 min",
			image: require("../assets/images/exercises/jiu-jitsu/raspagem.gif"),
			rep: 1,
		},
		{
			id: 10,
			name: "Guarda arranha",
			time: "5 min",
			image: require("../assets/images/exercises/jiu-jitsu/raspagem-2.gif"),
			rep: 1,
		},
	];

export const judoExercises: Exercise[] = [
	{
			id: 1,
			name: "Braços",
			time: "5 min",
			image: require("../assets/images/exercises/jiu-jitsu/arms.gif"),
			rep: 50,
		},
			{
			id: 2,
			name: "Pernas",
			time: "5 min",
			image: require("../assets/images/exercises/jiu-jitsu/butt-kicks.gif"),
			rep: 50,
		},
			{
			id: 3,
			name: "Joelhos altos",
			time: "5 min",
			image: require("../assets/images/exercises/jiu-jitsu/high-knee.gif"),
			rep: 20,
		},
		{
			id: 4,
			name: "Harai goshi",
			time: "5 min",
			image: require("../assets/images/exercises/judo/harai-goshi.gif"),
			rep: 10,
		},
			{
			id: 5,
			name: "Honke sagatame",
			time: "5 min",
			image: require("../assets/images/exercises/judo/honkesagatame.gif"),
			rep: 10,
		},
		{
			id: 6,
			name: "Ippon seoinage",
			time: "5 min",
			image: require("../assets/images/exercises/judo/ippon-seoinage.gif"),
			rep: 10,
		},
		{
			id: 7,
			name: "Koshi guruma",
			time: "5 min",
			image: require("../assets/images/exercises/judo/koshi-guruma.gif"),
			rep: 10,
		},
		{
			id: 8,
			name: "Mae hidari",
			time: "5 min",
			image: require("../assets/images/exercises/judo/mae-hidari.gif"),
			rep: 10,
		},
		{
			id: 9,
			name: "Morote Seoinage",
			time: "5 min",
			image: require("../assets/images/exercises/judo/morote-seoi.gif"),
			rep: 10,
		},
		{
			id: 10,
			name: "O goshi",
			time: "5 min",
			image: require("../assets/images/exercises/judo/ogoshi.gif"),
			rep: 10,
		},
		{
			id: 11,
			name: "Taiotoshi",
			time: "5 min",
			image: require("../assets/images/exercises/judo/taiotoshi.gif"),
			rep: 10,
		},
		{
			id: 12,
			name: "Uchi mata",
			time: "5 min",
			image: require("../assets/images/exercises/judo/uchi-mata.gif"),
			rep: 10,
		},
		{
			id: 13,
			name: "Waki Gatame",
			time: "5 min",
			image: require("../assets/images/exercises/judo/waki-gatame.gif"),
			rep: 10,
		},
];

export const kickbocExercises: Exercise[] = [
	{
			id: 1,
			name: "Braços",
			time: "5 min",
			image: require("../assets/images/exercises/jiu-jitsu/arms.gif"),
			rep: 50,
		},
			{
			id: 2,
			name: "Pernas",
			time: "5 min",
			image: require("../assets/images/exercises/jiu-jitsu/butt-kicks.gif"),
			rep: 50,
		},
			{
			id: 3,
			name: "Joelhos altos",
			time: "5 min",
			image: require("../assets/images/exercises/jiu-jitsu/high-knee.gif"),
			rep: 20,
		},
		{
			id: 4,
			name: "Back kick",
			time: "5 min",
			image: require("../assets/images/exercises/kickbox/back-kick.gif"),
			rep: 10,
		},
		{
			id: 5,
			name: "Cross",
			time: "5 min",
			image: require("../assets/images/exercises/kickbox/cross.gif"),
			rep: 10,
		},
		{
			id: 6,
			name: "Head kick",
			time: "5 min",
			image: require("../assets/images/exercises/kickbox/head-kick.gif"),
			rep: 10,
		},
		{
			id: 7,
			name: "Jab",
			time: "5 min",
			image: require("../assets/images/exercises/kickbox/jab.gif"),
			rep: 10,
		},
		{
			id: 8,
			name: "Power jack",
			time: "5 min",
			image: require("../assets/images/exercises/kickbox/power-jack.gif"),
			rep: 10,
		},
		{
			id: 9,
			name: "Punch",
			time: "5 min",
			image: require("../assets/images/exercises/kickbox/punch.gif"),
			rep: 10,
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
		kickbocExercises,
		rating: 4,
		minutes: 135,
		calories: 2100,
		description:
			"Perder peso refere-se ao processo de redução do peso corporal, geralmente com o objetivo de alcançar uma composição corporal mais saudável. Envolve uma combinação de mudanças na dieta, atividade física e adoção de um estilo de vida sustentável.",
	},
	{
		id: 2,
		name: "Ganhar massa muscular",
		coach: "Paulo Bizerra",
		image: require("../assets/images/workouts/gain-muscle.jpeg"),
		kickbocExercises,
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
		kickbocExercises,
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
		kickbocExercises,
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
		kickbocExercises,
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
		kickbocExercises,
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
		kickbocExercises,
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
