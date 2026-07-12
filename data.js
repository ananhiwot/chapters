/*********************************************************************
 Ethiopian Secondary School Curriculum Organizer
 data.js
*********************************************************************/

const SUBJECTS = {

    mathematics:{

        "9":[
            "Further on Sets",
            "The Number System",
            "Solving Equations",
            "Solving Inequalities",
            "Introduction to Trigonometry",
            "Regular Polygons",
            "Congruency and Similarity",
            "Vectors in Two Dimensions",
            "Statistics and Probability"
        ],

        "10":[
            "Relations and Functions",
            "Polynomial Functions",
            "Exponential and Logarithmic Functions",
            "Trigonometric Functions",
            "Circles",
            "Solid Figures"
        ],

        "11":[
            "Relations and Functions",
            "Rational Expressions and Rational Functions",
            "Matrices, Determinants and Their Properties",
            "Vectors",
            "Transformations of the Plane",
            "Statistics and Probability"
        ],

        "12":[
            "Sequences and Series",
            "Limits and Continuity",
            "Introduction to Derivatives",
            "Applications of Derivatives",
            "Integral Calculus",
            "Three Dimensional Geometry and Vectors in Space"
        ]

    },



    physics:{

        "9":[
            "Introduction to Physics & Measurement",
            "Vector Quantities",
            "Motion in a Straight Line",
            "Force and Newton's Laws",
            "Work, Energy and Power",
            "Simple Machines",
            "Fluid Statics",
            "Heat, Temperature and Thermal Expansion",
            "Wave Motion and Sound"
        ],

        "10":[
            "Vector Quantities & Motion in Two Dimensions",
            "Static Electricity",
            "Current Electricity",
            "Magnetism",
            "Electromagnetism & Electronics",
            "Electromagnetic Waves & Geometrical Optics"
        ],

        "11":[
            "Measurement and Practical Work",
            "Vector Quantities",
            "Kinematics",
            "Dynamics",
            "Work, Energy and Power",
            "Elasticity and Static Equilibrium of Rigid Bodies"
        ],

        "12":[
            "Thermodynamics",
            "Oscillations and Waves",
            "Wave Optics",
            "Electrostatics",
            "Current Electricity",
            "Magnetism",
            "Electromagnetic Induction and a.c. Circuits",
            "Atomic Physics"
        ]

    },



    chemistry:{

        "9":[
            "Introduction to Chemistry",
            "Structure of the Atom",
            "Periodic Classification of Elements",
            "Chemical Bonding and Intermolecular Forces",
            "Chemical Reactions and Stoichiometry",
            "Physical States of Matter"
        ],

        "10":[
            "Introduction to Organic Chemistry",
            "Chemical Reactions and Stoichiometry Applications",
            "Solutions",
            "Inorganic Compounds",
            "Metals and Non-metals",
            "Electrochemistry Basics"
        ],

        "11":[
            "Atomic Structure and Properties",
            "Chemical Bonding and Intermolecular Forces",
            "Physical States of Matter",
            "Chemical Kinetics",
            "Chemical Equilibrium",
            "Oxygen-Containing Organic Compounds"
        ],

        "12":[
            "Solutions",
            "Acid-Base Equilibrium",
            "Introduction to Chemical Thermodynamics",
            "Electrochemistry",
            "Chemical Kinetics",
            "Organic Chemistry"
        ]

    },



    biology:{

        "9":[
            "Biology and Technology",
            "Cell Biology",
            "Human Biology and Health",
            "Micro-organisms and Disease",
            "Classification",
            "Environment"
        ],

        "10":[
            "Biotechnology",
            "Heredity",
            "Human Biology and Health",
            "Food Making and Growth in Plants",
            "Ecology"
        ],

        "11":[
            "The Science of Biology",
            "Biochemical Molecules",
            "Enzymes",
            "Cell Biology",
            "Energy Transformation"
        ],

        "12":[
            "Genetic Basis of Inheritance",
            "Principles of Genetics",
            "Evolution",
            "Ecology and Environment",
            "The Nervous System and Sensory Organs"
        ]

    }

};


/*********************************************************************
 SUBJECT COLORS
*********************************************************************/

const SUBJECT_COLORS = {

    mathematics:"#1976d2",

    physics:"#d32f2f",

    chemistry:"#2e7d32",

    biology:"#8e24aa"

};


/*********************************************************************
 GRADE LABELS
*********************************************************************/

const GRADE_LABELS = {

    "9":"Grade 9",

    "10":"Grade 10",

    "11":"Grade 11",

    "12":"Grade 12"

};


/*********************************************************************
 GAME SETTINGS
*********************************************************************/

const GAME_SETTINGS = {

    pointsCorrect:10,

    pointsWrong:-2,

    hintPenalty:2,

    animationSpeed:300,

    shuffleOnStart:true,

    enableTimer:true,

    enableHints:true,

    enableLocalStorage:true,

    enableConfetti:true

};


/*********************************************************************
 SIMPLE AI KNOWLEDGE BASE
*********************************************************************/

const DEFINITIONS = {

    "Further on Sets":"Study of sets, subsets, operations on sets and Venn diagrams.",

    "Introduction to Trigonometry":"Study of angles and relationships between the sides of triangles.",

    "Statistics and Probability":"Collection, organization, analysis and interpretation of data.",

    "Motion in a Straight Line":"Study of one-dimensional motion.",

    "Force and Newton's Laws":"Study of forces and the laws governing motion.",

    "Current Electricity":"Movement of electric charges through conductors.",

    "Magnetism":"Study of magnetic fields and magnetic materials.",

    "Thermodynamics":"Study of heat, work and energy.",

    "Wave Optics":"Study of light as a wave.",

    "Atomic Physics":"Study of the structure and behavior of atoms.",

    "Chemical Bonding and Intermolecular Forces":"How atoms combine to form substances.",

    "Stoichiometry":"Quantitative relationships in chemical reactions.",

    "Cell Biology":"Study of cells.",

    "Genetics":"Study of heredity.",

    "Ecology":"Study of organisms and their environment.",

    "Evolution":"Study of biological change through time."

};