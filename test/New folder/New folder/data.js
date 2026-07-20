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

const _disabledCurriculumBlock = `
The old curriculum bulk content below was removed because this app only uses the SUBJECTS data above.
It previously referenced an undefined curriculum object, which prevented the page script from initializing correctly.




{
    id:"MATH_G9_01",

    subject:"Mathematics",

    grade:9,

    chapter:"Further on Sets",

    overview:
    "This chapter extends students' understanding of sets by introducing advanced set operations, subsets, universal sets, complements, Venn diagrams, and practical applications of set theory.",

    detailedExplanation:
    "Students learn how to represent collections of objects using set notation, perform operations such as union and intersection, solve practical problems using Venn diagrams, and apply logical reasoning in mathematical situations.",

    objectives:[

        "Define sets correctly",

        "Represent sets using roster and rule methods",

        "Identify subsets",

        "Use universal sets",

        "Perform union operations",

        "Perform intersection operations",

        "Determine complements",

        "Interpret Venn diagrams",

        "Solve real-life problems involving sets"

    ],

    keyConcepts:[

        "Set",

        "Subset",

        "Universal Set",

        "Empty Set",

        "Union",

        "Intersection",

        "Complement",

        "Difference of Sets",

        "Venn Diagram"

    ],

    importantTerms:[

        "Element",

        "Roster Form",

        "Set Builder Form",

        "Finite Set",

        "Infinite Set"

    ],

    formulas:[

        "n(A ∪ B)=n(A)+n(B)-n(A∩B)",

        "A' = Universal Set - A"

    ],

    workedExamples:[

        "Find the union of two sets.",

        "Determine the intersection of A and B.",

        "Represent information using a Venn Diagram."

    ],

    applications:[

        "Student club membership",

        "Survey analysis",

        "Database classification",

        "Computer science",

        "Statistics"

    ],

    commonMistakes:[

        "Confusing subset with element",

        "Incorrect union calculation",

        "Incorrect complement determination"

    ],

    revisionNotes:[

        "Practice Venn diagrams frequently.",

        "Remember that intersection means common elements.",

        "Union combines all unique elements."

    ],

    examTips:[

        "Draw diagrams before solving.",

        "Check duplicates during union.",

        "Always identify the universal set."

    ],

    practiceQuestions:[

        "Define a set.",

        "Differentiate subset and element.",

        "Find A∪B.",

        "Find A∩B.",

        "Solve a Venn Diagram problem."

    ],

    aiKeywords:[

        "sets",

        "subset",

        "union",

        "intersection",

        "venn diagram",

        "grade 9 mathematics",

        "ethiopia"

    ],

    relatedChapters:[

        "Statistics and Probability",

        "The Number System"

    ],

    difficulty:"Medium"

},

{

    id:"MATH_G9_02",

    subject:"Mathematics",

    grade:9,

    chapter:"The Number System",

    overview:
    "Introduces the different types of numbers and their properties, including natural numbers, integers, rational numbers, irrational numbers, and real numbers.",

    detailedExplanation:
    "Students investigate the hierarchy of numbers, perform operations on real numbers, simplify expressions, apply laws of indices, and solve numerical problems encountered in daily life.",

    objectives:[

        "Identify natural numbers",

        "Identify whole numbers",

        "Identify integers",

        "Identify rational numbers",

        "Identify irrational numbers",

        "Classify real numbers",

        "Use laws of indices",

        "Simplify radicals",

        "Solve numerical expressions"

    ],

    keyConcepts:[

        "Natural Numbers",

        "Whole Numbers",

        "Integers",

        "Rational Numbers",

        "Irrational Numbers",

        "Real Numbers",

        "Indices",

        "Roots"

    ],

    importantTerms:[

        "Prime Number",

        "Composite Number",

        "Absolute Value",

        "Square Root",

        "Cube Root"

    ],

    formulas:[

        "a^m × a^n = a^(m+n)",

        "a^m / a^n = a^(m-n)",

        "(a^m)^n = a^(mn)",

        "√a × √b = √ab"

    ],

    workedExamples:[

        "Simplify powers.",

        "Simplify radicals.",

        "Classify numbers.",

        "Evaluate expressions."

    ],

    applications:[

        "Engineering",

        "Architecture",

        "Financial calculations",

        "Computer programming",

        "Scientific calculations"

    ],

    commonMistakes:[

        "Mixing rational and irrational numbers",

        "Incorrect index calculations",

        "Wrong radical simplification"

    ],

    revisionNotes:[

        "Master the laws of indices.",

        "Practice radical simplification.",

        "Know each number classification."

    ],

    examTips:[

        "Always simplify completely.",

        "Check index rules carefully.",

        "Distinguish rational from irrational."

    ],

    practiceQuestions:[

        "Classify numbers.",

        "Simplify powers.",

        "Evaluate radicals.",

        "Apply index laws.",

        "Solve mixed expressions."

    ],

    aiKeywords:[

        "real numbers",

        "indices",

        "roots",

        "irrational numbers",

        "grade 9 mathematics",

        "ethiopia"

    ],

    relatedChapters:[

        "Solving Equations",

        "Further on Sets"

    ],

    difficulty:"Medium"

}

);

/*=========================================================
PART 1A-1b
MATHEMATICS - GRADE 9
Chapter 3 : Solving Equations
Chapter 4 : Solving Inequalities
=========================================================*/

curriculum.Mathematics.grade9.push(

{

    id:"MATH_G9_03",

    subject:"Mathematics",

    grade:9,

    chapter:"Solving Equations",

    overview:
    "This chapter develops students' ability to solve linear equations and apply algebraic methods to mathematical and real-life problems.",

    detailedExplanation:
    "Students learn the meaning of an equation, methods of solving one-variable linear equations, verification of solutions, and the application of equations to word problems. Emphasis is placed on logical reasoning and maintaining equality while manipulating equations.",

    objectives:[

        "Define an equation",

        "Identify variables and constants",

        "Solve one-step equations",

        "Solve multi-step equations",

        "Solve equations containing brackets",

        "Solve equations containing fractions",

        "Verify solutions",

        "Translate word problems into equations",

        "Solve real-life mathematical problems"

    ],

    keyConcepts:[

        "Equation",

        "Variable",

        "Constant",

        "Coefficient",

        "Linear Equation",

        "Solution",

        "Balancing Method",

        "Substitution"

    ],

    importantTerms:[

        "Unknown",

        "Algebraic Expression",

        "Equality",

        "Inverse Operation",

        "Simplification"

    ],

    formulas:[

        "ax + b = c",

        "x = (c - b)/a",

        "If a=b then a+c=b+c",

        "If a=b then ac=bc"

    ],

    workedExamples:[

        "Solve x + 8 = 15",

        "Solve 3x - 5 = 19",

        "Solve 2(x+3)=18",

        "Solve (x/4)+6=10"

    ],

    applications:[

        "Age problems",

        "Business calculations",

        "Construction measurements",

        "Financial planning",

        "Engineering calculations"

    ],

    commonMistakes:[

        "Changing signs incorrectly",

        "Forgetting inverse operations",

        "Incorrect fraction manipulation",

        "Not checking the final answer"

    ],

    revisionNotes:[

        "Always perform the same operation on both sides.",

        "Simplify before solving whenever possible.",

        "Verify every solution."

    ],

    examTips:[

        "Read word problems carefully.",

        "Show every algebraic step.",

        "Avoid arithmetic mistakes.",

        "Check your final answer."

    ],

    practiceQuestions:[

        "Solve x + 9 = 18.",

        "Solve 5x - 8 = 22.",

        "Solve 3(x-2)=15.",

        "Translate a word problem into an equation.",

        "Verify the solution."

    ],

    aiKeywords:[

        "equation",

        "linear equation",

        "solve equation",

        "algebra",

        "grade 9 mathematics",

        "ethiopia"

    ],

    relatedChapters:[

        "Solving Inequalities",

        "The Number System"

    ],

    difficulty:"Medium"

},

{

    id:"MATH_G9_04",

    subject:"Mathematics",

    grade:9,

    chapter:"Solving Inequalities",

    overview:
    "This chapter introduces mathematical inequalities and teaches students how to solve and represent inequality relationships.",

    detailedExplanation:
    "Students learn the meaning of inequalities, symbols used in inequalities, methods of solving linear inequalities, graphical representation on the number line, interval notation, and practical applications involving ranges of values.",

    objectives:[

        "Define inequalities",

        "Recognize inequality symbols",

        "Solve one-step inequalities",

        "Solve multi-step inequalities",

        "Represent solutions on a number line",

        "Write interval notation",

        "Solve word problems involving inequalities",

        "Interpret solution sets"

    ],

    keyConcepts:[

        "Inequality",

        "Solution Set",

        "Number Line",

        "Interval",

        "Greater Than",

        "Less Than",

        "Inclusive Boundary",

        "Exclusive Boundary"

    ],

    importantTerms:[

        ">",

        "<",

        "≥",

        "≤",

        "Interval Notation",

        "Boundary Point"

    ],

    formulas:[

        "If multiplying or dividing by a negative number, reverse the inequality sign."

    ],

    workedExamples:[

        "Solve x + 5 > 9",

        "Solve 4x ≤ 20",

        "Solve -2x > 8",

        "Represent solutions graphically"

    ],

    applications:[

        "Budget planning",

        "Engineering tolerances",

        "Temperature limits",

        "Population statistics",

        "Construction safety limits"

    ],

    commonMistakes:[

        "Forgetting to reverse the inequality sign after multiplying or dividing by a negative number",

        "Incorrect graphing on the number line",

        "Confusing open and closed circles"

    ],

    revisionNotes:[

        "Remember the inequality reversal rule.",

        "Always graph the final solution.",

        "Understand interval notation."

    ],

    examTips:[

        "Draw a number line.",

        "Use the correct endpoint symbol.",

        "Double-check inequality direction."

    ],

    practiceQuestions:[

        "Solve x - 7 > 12.",

        "Solve 3x ≤ 15.",

        "Solve -5x < 25.",

        "Graph the solution.",

        "Write the answer in interval notation."

    ],

    aiKeywords:[

        "inequality",

        "number line",

        "interval notation",

        "greater than",

        "less than",

        "grade 9 mathematics",

        "ethiopia"

    ],

    relatedChapters:[

        "Solving Equations",

        "Statistics and Probability"

    ],

    difficulty:"Medium"

}

);

/*=========================================================
PART 1A-2
MATHEMATICS - GRADE 9
Chapters 5-9
=========================================================*/

curriculum.Mathematics.grade9.push(

{

id:"MATH_G9_05",

subject:"Mathematics",

grade:9,

chapter:"Introduction to Trigonometry",

overview:
"Introduces trigonometry through right-angled triangles and the trigonometric ratios used to determine unknown sides and angles.",

detailedExplanation:
"Students learn the concepts of sine, cosine and tangent, identify opposite, adjacent and hypotenuse, calculate unknown sides and angles, and apply trigonometry to practical measurement problems.",

objectives:[

"Identify right triangles",

"Recognize opposite, adjacent and hypotenuse",

"Define sine",

"Define cosine",

"Define tangent",

"Use trigonometric tables or calculator",

"Solve right triangle problems",

"Apply trigonometry in practical situations"

],

keyConcepts:[

"Right Triangle",

"Angle of Elevation",

"Angle of Depression",

"Sine",

"Cosine",

"Tangent"

],

importantTerms:[

"Opposite Side",

"Adjacent Side",

"Hypotenuse"

],

formulas:[

"sinθ = Opposite/Hypotenuse",

"cosθ = Adjacent/Hypotenuse",

"tanθ = Opposite/Adjacent"

],

workedExamples:[

"Find a missing side.",

"Find an unknown angle.",

"Solve an angle of elevation problem."

],

applications:[

"Architecture",

"Surveying",

"Engineering",

"Construction",

"Navigation"

],

commonMistakes:[

"Mixing opposite and adjacent sides",

"Using the wrong trigonometric ratio",

"Calculator in wrong angle mode"

],

revisionNotes:[

"Remember SOH CAH TOA.",

"Draw a labelled triangle first."

],

examTips:[

"Always identify the reference angle.",

"Write the formula before substitution."

],

practiceQuestions:[

"Find a missing side using sine.",

"Calculate an unknown angle.",

"Solve a real-life height problem."

],

aiKeywords:[

"trigonometry",

"SOHCAHTOA",

"sine",

"cosine",

"tangent"

],

relatedChapters:[

"Regular Polygons",

"Congruency and Similarity"

],

difficulty:"Medium"

},

{

id:"MATH_G9_06",

subject:"Mathematics",

grade:9,

chapter:"Regular Polygons",

overview:
"Explores the properties of regular polygons, interior angles, exterior angles and symmetry.",

detailedExplanation:
"Students investigate different regular polygons, calculate angle measures, identify lines of symmetry and understand geometric relationships.",

objectives:[

"Identify regular polygons",

"Calculate interior angles",

"Calculate exterior angles",

"Determine symmetry",

"Classify polygons"

],

keyConcepts:[

"Polygon",

"Regular Polygon",

"Interior Angle",

"Exterior Angle",

"Symmetry"

],

importantTerms:[

"Pentagon",

"Hexagon",

"Heptagon",

"Octagon",

"Nonagon",

"Decagon"

],

formulas:[

"Interior Sum=(n−2)×180°",

"One Interior Angle=((n−2)×180)/n",

"Exterior Angle=360/n"

],

workedExamples:[

"Calculate an interior angle.",

"Determine the number of sides."

],

applications:[

"Architecture",

"Engineering",

"Floor Design",

"Road Signs"

],

commonMistakes:[

"Confusing interior and exterior angles"

],

revisionNotes:[

"Exterior angles always total 360°."

],

examTips:[

"Draw the polygon before solving."

],

practiceQuestions:[

"Find the interior angle of a hexagon.",

"Find the exterior angle of a regular octagon."

],

aiKeywords:[

"polygon",

"interior angle",

"exterior angle",

"symmetry"

],

relatedChapters:[

"Congruency and Similarity"

],

difficulty:"Medium"

},

{

id:"MATH_G9_07",

subject:"Mathematics",

grade:9,

chapter:"Congruency and Similarity",

overview:
"Examines the conditions under which figures are congruent or similar.",

detailedExplanation:
"Students compare geometric figures, determine congruent and similar triangles and solve proportional geometry problems.",

objectives:[

"Define congruence",

"Define similarity",

"Identify congruent triangles",

"Identify similar triangles",

"Use proportional reasoning"

],

keyConcepts:[

"Congruence",

"Similarity",

"Scale Factor",

"Corresponding Sides",

"Corresponding Angles"

],

importantTerms:[

"SSS",

"SAS",

"ASA",

"AAA"

],

formulas:[

"Scale Factor = Corresponding Side / Original Side"

],

workedExamples:[

"Determine if two triangles are similar.",

"Calculate an unknown side."

],

applications:[

"Map Reading",

"Building Design",

"Engineering Drawings"

],

commonMistakes:[

"Mixing congruent with similar figures"

],

revisionNotes:[

"Congruent means same shape and same size."

],

examTips:[

"Always match corresponding vertices."

],

practiceQuestions:[

"Find the scale factor.",

"Determine whether two triangles are congruent."

],

aiKeywords:[

"similarity",

"congruence",

"scale factor"

],

relatedChapters:[

"Vectors in Two Dimensions"

],

difficulty:"Medium"

},

{

id:"MATH_G9_08",

subject:"Mathematics",

grade:9,

chapter:"Vectors in Two Dimensions",

overview:
"Introduces vectors as quantities possessing both magnitude and direction.",

detailedExplanation:
"Students learn vector notation, addition, subtraction and graphical representation of vectors in two-dimensional space.",

objectives:[

"Define vectors",

"Represent vectors graphically",

"Add vectors",

"Subtract vectors",

"Determine resultant vectors"

],

keyConcepts:[

"Vector",

"Magnitude",

"Direction",

"Resultant",

"Scalar"

],

importantTerms:[

"Column Vector",

"Position Vector"

],

formulas:[

"Resultant = A + B"

],

workedExamples:[

"Add two vectors.",

"Subtract vectors graphically."

],

applications:[

"Navigation",

"Physics",

"Engineering",

"Architecture"

],

commonMistakes:[

"Confusing vectors and scalars"

],

revisionNotes:[

"Always indicate direction."

],

examTips:[

"Draw vector diagrams neatly."

],

practiceQuestions:[

"Find the resultant vector.",

"Represent vectors on a graph."

],

aiKeywords:[

"vectors",

"magnitude",

"direction"

],

relatedChapters:[

"Statistics and Probability"

],

difficulty:"Medium"

},

{

id:"MATH_G9_09",

subject:"Mathematics",

grade:9,

chapter:"Statistics and Probability",

overview:
"Introduces data collection, presentation, analysis and basic probability concepts.",

detailedExplanation:
"Students organize data using tables and graphs, calculate measures of central tendency and determine simple probabilities.",

objectives:[

"Collect data",

"Organize data",

"Interpret graphs",

"Calculate mean",

"Calculate median",

"Calculate mode",

"Determine probability"

],

keyConcepts:[

"Mean",

"Median",

"Mode",

"Range",

"Probability",

"Frequency"

],

importantTerms:[

"Histogram",

"Bar Graph",

"Pie Chart",

"Sample",

"Population"

],

formulas:[

"Mean = Sum of Values / Number of Values",

"Probability = Favorable Outcomes / Total Outcomes"

],

workedExamples:[

"Calculate the mean.",

"Find the probability of an event.",

"Interpret a graph."

],

applications:[

"Business",

"Medicine",

"Engineering",

"Education",

"Scientific Research"

],

commonMistakes:[

"Using incorrect totals",

"Confusing mean and median"

],

revisionNotes:[

"Always organize data before calculations."

],

examTips:[

"Label graphs correctly.",

"Check probability is between 0 and 1."

],

practiceQuestions:[

"Calculate the mean.",

"Determine a probability.",

"Interpret a histogram."

],

aiKeywords:[

"statistics",

"probability",

"mean",

"median",

"mode"

],

relatedChapters:[

"Further on Sets"

],

difficulty:"Medium"

}

);
/*=========================================================
PART 1B-1
MATHEMATICS - GRADE 10
Chapters 1-3
=========================================================*/

curriculum.Mathematics.grade10.push(

{

id:"MATH_G10_01",

subject:"Mathematics",

grade:10,

chapter:"Relations and Functions",

overview:
"This chapter introduces relations and functions, their representations, domain, range, and different methods of describing functional relationships.",

detailedExplanation:
"Students learn to distinguish between relations and functions, identify domains and ranges, represent functions using tables, graphs and equations, and evaluate functions for specific values. The chapter establishes the foundation for advanced algebra and calculus.",

objectives:[

"Define relations",

"Define functions",

"Determine domain",

"Determine range",

"Represent functions graphically",

"Represent functions algebraically",

"Evaluate functions",

"Interpret graphs"

],

keyConcepts:[

"Relation",

"Function",

"Domain",

"Range",

"Ordered Pair",

"Mapping",

"Graph"

],

importantTerms:[

"Independent Variable",

"Dependent Variable",

"Vertical Line Test"

],

formulas:[

"f(x)=ax+b",

"y=f(x)"

],

workedExamples:[

"Determine whether a relation is a function.",

"Find the domain of a function.",

"Evaluate f(3).",

"Draw the graph of a linear function."

],

applications:[

"Economics",

"Population Growth",

"Business",

"Engineering",

"Computer Programming"

],

commonMistakes:[

"Confusing relation with function",

"Incorrect domain identification",

"Incorrect graph interpretation"

],

revisionNotes:[

"A function assigns exactly one output to each input.",

"Use the vertical line test when graphing."

],

examTips:[

"Always write the domain.",

"Label graph axes correctly.",

"Substitute values carefully."

],

practiceQuestions:[

"Determine if a relation is a function.",

"Find the domain and range.",

"Evaluate a given function.",

"Sketch the graph."

],

aiKeywords:[

"functions",

"relations",

"domain",

"range",

"graph"

],

relatedChapters:[

"Polynomial Functions",

"Trigonometric Functions"

],

difficulty:"Medium"

},

{

id:"MATH_G10_02",

subject:"Mathematics",

grade:10,

chapter:"Polynomial Functions",

overview:
"This chapter introduces polynomial expressions and functions, their graphs, roots and algebraic operations.",

detailedExplanation:
"Students study polynomial terminology, degree, coefficients, addition, subtraction, multiplication, factorization and graphing. They learn how polynomial functions model many real-world situations.",

objectives:[

"Define polynomial",

"Identify degree",

"Identify coefficients",

"Factor polynomials",

"Evaluate polynomial functions",

"Graph polynomial functions",

"Find roots"

],

keyConcepts:[

"Polynomial",

"Degree",

"Coefficient",

"Root",

"Zero",

"Factor"

],

importantTerms:[

"Monomial",

"Binomial",

"Trinomial"

],

formulas:[

"(a+b)²=a²+2ab+b²",

"(a-b)²=a²-2ab+b²",

"a²-b²=(a+b)(a-b)"

],

workedExamples:[

"Factor x²−9.",

"Evaluate P(2).",

"Find the zeros of a polynomial."

],

applications:[

"Engineering",

"Economics",

"Architecture",

"Computer Graphics"

],

commonMistakes:[

"Incorrect factorization",

"Sign errors",

"Wrong degree identification"

],

revisionNotes:[

"Practice common factorization techniques.",

"Always check by expansion."

],

examTips:[

"Write every algebraic step.",

"Verify factors."

],

practiceQuestions:[

"Factor a quadratic.",

"Find polynomial roots.",

"Graph a polynomial."

],

aiKeywords:[

"polynomial",

"factorization",

"roots",

"quadratic"

],

relatedChapters:[

"Relations and Functions",

"Exponential and Logarithmic Functions"

],

difficulty:"Medium"

},

{

id:"MATH_G10_03",

subject:"Mathematics",

grade:10,

chapter:"Exponential and Logarithmic Functions",

overview:
"This chapter introduces exponential growth and decay together with logarithms and their applications.",

detailedExplanation:
"Students investigate exponential functions, logarithmic functions, laws of logarithms and practical applications involving population growth, finance and science.",

objectives:[

"Define exponential functions",

"Define logarithms",

"Apply index laws",

"Apply logarithm laws",

"Convert exponential form to logarithmic form",

"Solve exponential equations",

"Graph exponential functions"

],

keyConcepts:[

"Exponent",

"Logarithm",

"Growth",

"Decay",

"Base"

],

importantTerms:[

"Common Logarithm",

"Natural Logarithm"

],

formulas:[

"log(ab)=log(a)+log(b)",

"log(a/b)=log(a)-log(b)",

"log(a^n)=nlog(a)",

"a^(log_a x)=x"

],

workedExamples:[

"Evaluate logarithms.",

"Solve exponential equations.",

"Convert between exponential and logarithmic forms."

],

applications:[

"Population Growth",

"Radioactive Decay",

"Finance",

"Computer Science"

],

commonMistakes:[

"Mixing index and logarithm rules",

"Incorrect calculator usage",

"Using different logarithm bases"

],

revisionNotes:[

"Memorize the logarithm laws.",

"Practice exponential equations regularly."

],

examTips:[

"Write all logarithm steps clearly.",

"Check the logarithm base."

],

practiceQuestions:[

"Simplify logarithms.",

"Solve exponential equations.",

"Graph exponential functions."

],

aiKeywords:[

"logarithm",

"exponential",

"growth",

"decay"

],

relatedChapters:[

"Polynomial Functions",

"Trigonometric Functions"

],

difficulty:"Medium"

}

);
/*=========================================================
PART 1B-2
MATHEMATICS - GRADE 10
Chapters 4-6
=========================================================*/

curriculum.Mathematics.grade10.push(

{

id:"MATH_G10_04",

subject:"Mathematics",

grade:10,

chapter:"Trigonometric Functions",

overview:
"This chapter extends students' understanding of trigonometry by introducing trigonometric functions, identities, graphs and applications.",

detailedExplanation:
"Students study sine, cosine and tangent as mathematical functions, investigate their graphs, solve trigonometric equations, verify identities and apply trigonometry to practical problems involving heights, distances and navigation.",

objectives:[

"Define trigonometric functions",

"Evaluate trigonometric ratios",

"Draw trigonometric graphs",

"Solve trigonometric equations",

"Verify simple identities",

"Apply trigonometry to practical problems"

],

keyConcepts:[

"Sine",

"Cosine",

"Tangent",

"Trigonometric Identity",

"Period",

"Amplitude",

"Reference Angle"

],

importantTerms:[

"Unit Circle",

"Radian",

"Degree",

"Principal Angle"

],

formulas:[

"sin²θ + cos²θ = 1",

"tanθ = sinθ / cosθ",

"sin(-θ) = -sinθ",

"cos(-θ) = cosθ"

],

workedExamples:[

"Evaluate trigonometric ratios.",

"Solve sinθ = 0.5.",

"Sketch the graph of y = sin x.",

"Verify a trigonometric identity."

],

applications:[

"Architecture",

"Bridge Design",

"Engineering",

"Surveying",

"Navigation"

],

commonMistakes:[

"Calculator in wrong angle mode",

"Confusing identities",

"Incorrect graph periods"

],

revisionNotes:[

"Remember SOH-CAH-TOA.",

"Learn the unit circle values.",

"Practice graph transformations."

],

examTips:[

"Write identities before simplifying.",

"State the angle unit.",

"Check calculator settings."

],

practiceQuestions:[

"Simplify trigonometric expressions.",

"Solve trigonometric equations.",

"Sketch trigonometric graphs."

],

aiKeywords:[

"trigonometric functions",

"sine",

"cosine",

"tangent",

"identities",

"graphs"

],

relatedChapters:[

"Relations and Functions",

"Circles"

],

difficulty:"Medium"

},

{

id:"MATH_G10_05",

subject:"Mathematics",

grade:10,

chapter:"Circles",

overview:
"This chapter investigates the geometry of circles, their properties, angles, chords, tangents and related theorems.",

detailedExplanation:
"Students examine the properties of circles including arcs, sectors, chords, tangents, inscribed angles and cyclic quadrilaterals. They apply circle theorems to solve geometric problems.",

objectives:[

"Identify parts of a circle",

"Apply circle theorems",

"Calculate arc lengths",

"Calculate sector areas",

"Solve angle problems",

"Use tangent properties"

],

keyConcepts:[

"Radius",

"Diameter",

"Chord",

"Arc",

"Sector",

"Tangent",

"Secant",

"Cyclic Quadrilateral"

],

importantTerms:[

"Central Angle",

"Inscribed Angle",

"Circumference"

],

formulas:[

"C = 2πr",

"A = πr²",

"Arc Length = (θ/360) × 2πr",

"Sector Area = (θ/360) × πr²"

],

workedExamples:[

"Find circumference.",

"Calculate sector area.",

"Solve tangent problems.",

"Determine unknown angles."

],

applications:[

"Wheel Design",

"Mechanical Engineering",

"Architecture",

"Road Construction"

],

commonMistakes:[

"Mixing radius and diameter",

"Incorrect angle relationships",

"Forgetting π"

],

revisionNotes:[

"Memorize important circle theorems.",

"Draw diagrams carefully."

],

examTips:[

"Label every angle.",

"Use circle properties logically."

],

practiceQuestions:[

"Calculate circumference.",

"Determine arc length.",

"Apply tangent theorem."

],

aiKeywords:[

"circle",

"radius",

"diameter",

"arc",

"sector",

"tangent"

],

relatedChapters:[

"Solid Figures"

],

difficulty:"Medium"

},

{

id:"MATH_G10_06",

subject:"Mathematics",

grade:10,

chapter:"Solid Figures",

overview:
"This chapter introduces three-dimensional geometric figures and develops spatial reasoning and measurement skills.",

detailedExplanation:
"Students study prisms, pyramids, cylinders, cones and spheres. They calculate surface areas and volumes while applying geometric principles to engineering, architecture and everyday life.",

objectives:[

"Identify solid figures",

"Calculate surface area",

"Calculate volume",

"Compare solids",

"Solve practical measurement problems"

],

keyConcepts:[

"Prism",

"Pyramid",

"Cylinder",

"Cone",

"Sphere",

"Surface Area",

"Volume"

],

importantTerms:[

"Face",

"Edge",

"Vertex",

"Net"

],

formulas:[

"Prism Volume = Base Area × Height",

"Cylinder Volume = πr²h",

"Cone Volume = (1/3)πr²h",

"Sphere Volume = (4/3)πr³",

"Sphere Surface Area = 4πr²"

],

workedExamples:[

"Find the volume of a cylinder.",

"Calculate the surface area of a prism.",

"Determine the volume of a cone."

],

applications:[

"Architecture",

"Civil Engineering",

"Construction",

"Packaging Design",

"Manufacturing"

],

commonMistakes:[

"Confusing surface area with volume",

"Incorrect unit conversions",

"Forgetting cubic units"

],

revisionNotes:[

"Always write units.",

"Draw the solid before solving.",

"Learn all volume formulas."

],

examTips:[

"Identify the correct solid first.",

"Use the correct formula.",

"Double-check calculations."

],

practiceQuestions:[

"Find the volume of a cone.",

"Calculate the surface area of a cylinder.",

"Compare two solid figures."

],

aiKeywords:[

"solid figures",

"volume",

"surface area",

"cylinder",

"cone",

"sphere",

"prism"

],

relatedChapters:[

"Circles",

"Trigonometric Functions"

],

difficulty:"Medium"

}

);
/*=========================================================
PART 1C-1a
MATHEMATICS - GRADE 11
Chapter 1 : Relations and Functions
=========================================================*/

curriculum.Mathematics.grade11.push(

{

id:"MATH_G11_01",

subject:"Mathematics",

grade:11,

chapter:"Relations and Functions",

overview:
"This chapter extends students' understanding of mathematical relations and functions by examining different types of functions, their properties, graphical representations and practical applications.",

detailedExplanation:
"Students investigate relations and functions in greater depth than Grade 10. They study one-to-one and many-to-one relations, inverse functions, composite functions, domain and range restrictions, graphical transformations and applications of functions in mathematics, science, economics and engineering.",

objectives:[

"Review relations and functions",

"Distinguish between different types of functions",

"Determine domains and ranges",

"Find inverse functions",

"Determine composite functions",

"Evaluate functions",

"Interpret graphs",

"Sketch graphs of functions",

"Model real-life situations using functions"

],

keyConcepts:[

"Relation",

"Function",

"Inverse Function",

"Composite Function",

"Domain",

"Range",

"Mapping",

"Graph",

"Independent Variable",

"Dependent Variable"

],

importantTerms:[

"Identity Function",

"Constant Function",

"One-to-One Function",

"Many-to-One Function",

"Onto Function",

"Inverse Relation"

],

formulas:[

"f(x)=ax+b",

"(f∘g)(x)=f(g(x))",

"f⁻¹(f(x))=x"

],

workedExamples:[

"Determine whether a relation is a function.",

"Find the inverse of a function.",

"Evaluate composite functions.",

"Sketch function graphs.",

"Determine domains and ranges."

],

applications:[

"Computer Programming",

"Economics",

"Business Forecasting",

"Engineering Models",

"Population Studies",

"Scientific Simulations"

],

commonMistakes:[

"Confusing inverse with reciprocal",

"Incorrect domain identification",

"Incorrect graph interpretation",

"Forgetting function notation"

],

revisionNotes:[

"A function assigns one output to each input.",

"Inverse functions reverse the original mapping.",

"Composite functions substitute one function into another."

],

examTips:[

"Always write function notation clearly.",

"Check domains before finding inverses.",

"Label graph axes properly.",

"Show every algebraic step."

],

practiceQuestions:[

"Find the inverse of a function.",

"Evaluate a composite function.",

"Determine whether a relation is a function.",

"Sketch a function graph.",

"Identify the domain and range."

],

flashCards:[

{
question:"What is a function?",
answer:"A relation in which every input has exactly one output."
},

{
question:"What is the domain?",
answer:"The set of all possible input values."
},

{
question:"What is the range?",
answer:"The set of all output values."
}

],

mcqs:[

{
question:"Which of the following represents a function?",

options:[
"A circle",
"A vertical line",
"A relation with one output for each input",
"A random graph"
],

answer:2

},

{
question:"The domain of a function represents:",

options:[
"Outputs",
"Inputs",
"Graphs",
"Coordinates"
],

answer:1

}

],

examQuestions:[

"Define a function.",

"Explain the difference between relation and function.",

"Find the inverse of a given function.",

"Evaluate a composite function.",

"Sketch the graph of a function."

],

aiKeywords:[

"functions",

"relation",

"inverse",

"composite",

"domain",

"range",

"grade 11 mathematics",

"ethiopian curriculum"

],

relatedChapters:[

"Polynomial Functions",

"Rational Expressions and Rational Functions",

"Statistics and Probability"

],

difficulty:"Medium",

estimatedStudyTime:"4 Hours",

revisionPriority:"High"

}

);
/*=========================================================
PART 1C-1b
MATHEMATICS - GRADE 11
Chapter 2 : Rational Expressions and Rational Functions
=========================================================*/

curriculum.Mathematics.grade11.push(

{

id:"MATH_G11_02",

subject:"Mathematics",

grade:11,

chapter:"Rational Expressions and Rational Functions",

overview:
"This chapter introduces rational expressions and rational functions. Students learn to simplify algebraic fractions, determine restrictions on variables, perform operations with rational expressions, solve rational equations and analyze the graphs of rational functions.",

detailedExplanation:
"Rational expressions are algebraic fractions in which both the numerator and denominator are polynomials. Students investigate factorization techniques, simplify rational expressions, perform addition, subtraction, multiplication and division, solve rational equations and study the characteristics of rational functions including vertical and horizontal asymptotes, intercepts and domains.",

objectives:[

"Define rational expressions",

"Identify restrictions on variables",

"Factor polynomial expressions",

"Simplify rational expressions",

"Multiply rational expressions",

"Divide rational expressions",

"Add rational expressions",

"Subtract rational expressions",

"Solve rational equations",

"Determine domains of rational functions",

"Identify asymptotes",

"Sketch graphs of rational functions"

],

keyConcepts:[

"Rational Expression",

"Rational Function",

"Polynomial",

"Factorization",

"Common Denominator",

"Domain",

"Vertical Asymptote",

"Horizontal Asymptote",

"Removable Discontinuity"

],

importantTerms:[

"Numerator",

"Denominator",

"Excluded Value",

"Lowest Terms",

"Reciprocal"

],

formulas:[

"(a/b) × (c/d) = ac/bd",

"(a/b) ÷ (c/d) = ad/bc",

"a/b + c/d = (ad+bc)/bd",

"a/b - c/d = (ad-bc)/bd"

],

workedExamples:[

"Simplify (x²−9)/(x²−3x).",

"Multiply two rational expressions.",

"Divide two algebraic fractions.",

"Solve a rational equation.",

"Find the domain of a rational function.",

"Determine vertical asymptotes.",

"Sketch the graph of a rational function."

],

applications:[

"Engineering calculations",

"Electrical circuit analysis",

"Computer algorithms",

"Economic modelling",

"Population modelling",

"Architecture"

],

commonMistakes:[

"Canceling terms instead of factors",

"Forgetting excluded values",

"Adding numerators directly without common denominators",

"Multiplying incorrectly",

"Missing extraneous solutions"

],

revisionNotes:[

"Always factor completely before simplifying.",

"Never cancel terms that are being added or subtracted.",

"State excluded values before simplification.",

"Check every solution in the original equation."

],

examTips:[

"Factor first.",

"Write restrictions before cancelling.",

"Use the LCD when adding fractions.",

"Verify rational equation solutions."

],

practiceQuestions:[

"Simplify a rational expression.",

"Multiply two algebraic fractions.",

"Divide rational expressions.",

"Find excluded values.",

"Solve a rational equation.",

"Sketch a rational function."

],

flashCards:[

{

question:"What is a rational expression?",

answer:"An algebraic fraction whose numerator and denominator are polynomials."

},

{

question:"Why are excluded values important?",

answer:"They make the denominator equal to zero and are therefore not allowed."

},

{

question:"What is a vertical asymptote?",

answer:"A vertical line that the graph approaches but never touches."

},

{

question:"What is a rational function?",

answer:"A function whose rule is a ratio of two polynomials."

}

],

mcqs:[

{

question:"Which value is NOT allowed if the denominator is x−5?",

options:[

"0",

"5",

"10",

"-5"

],

answer:1

},

{

question:"Before simplifying a rational expression you should:",

options:[

"Expand everything",

"Factor completely",

"Multiply first",

"Take square roots"

],

answer:1

},

{

question:"A rational function always has:",

options:[

"A polynomial denominator",

"A square root",

"A logarithm",

"A trigonometric ratio"

],

answer:0

}

],

examQuestions:[

"Simplify a rational expression.",

"Solve a rational equation.",

"Determine the excluded values.",

"Sketch a rational function.",

"Explain the meaning of an asymptote."

],

realLifeExamples:[

"Flow rate calculations",

"Average speed formulas",

"Electrical resistance equations",

"Business cost models",

"Computer graphics"

],

studyHints:[

"Practice factorization every day.",

"Always identify restrictions first.",

"Use graphing software to visualize asymptotes."

],

aiQuestionsStudentsMayAsk:[

"What is a rational function?",

"Why can't the denominator be zero?",

"How do I find asymptotes?",

"How do I simplify algebraic fractions?",

"What are excluded values?",

"How do I solve rational equations?"

],

aiKeywords:[

"rational",

"algebraic fraction",

"rational function",

"domain",

"asymptote",

"factorization",

"excluded value",

"grade 11 mathematics",

"ethiopian curriculum"

],

relatedChapters:[

"Relations and Functions",

"Matrices, Determinants and Their Properties",

"Polynomial Functions"

],

difficulty:"Medium",

estimatedStudyTime:"5 Hours",

revisionPriority:"High"

}

);
/*=========================================================
PART 1C-1c
MATHEMATICS - GRADE 11
Chapter 3 : Matrices, Determinants and Their Properties
=========================================================*/

curriculum.Mathematics.grade11.push(

{

id:"MATH_G11_03",

subject:"Mathematics",

grade:11,

chapter:"Matrices, Determinants and Their Properties",

overview:
"This chapter introduces matrices as rectangular arrays of numbers and develops students' understanding of matrix operations, determinants and their applications in solving mathematical and real-world problems.",

detailedExplanation:
"Students learn matrix notation, matrix types, matrix operations, determinants, inverse matrices and systems of linear equations. They discover how matrices are used extensively in engineering, architecture, economics, computer graphics, robotics and scientific computing.",

objectives:[

"Define a matrix",

"Identify the order of a matrix",

"Recognize different matrix types",

"Add matrices",

"Subtract matrices",

"Multiply matrices",

"Multiply a matrix by a scalar",

"Transpose a matrix",

"Calculate determinants",

"Find inverse matrices",

"Solve simultaneous equations using matrices",

"Apply matrices to real-life problems"

],

keyConcepts:[

"Matrix",

"Row",

"Column",

"Order",

"Square Matrix",

"Identity Matrix",

"Zero Matrix",

"Diagonal Matrix",

"Determinant",

"Inverse Matrix",

"Transpose",

"Singular Matrix",

"Non-singular Matrix"

],

importantTerms:[

"Element",

"Coefficient Matrix",

"Augmented Matrix",

"Adjoint",

"Cofactor",

"Minor"

],

formulas:[

"A + B",

"A - B",

"AB",

"kA",

"|A| = ad - bc",

"A⁻¹ = (1/|A|) adj(A)",

"(AB)^T = B^T A^T"

],

workedExamples:[

"Add two matrices.",

"Subtract matrices.",

"Multiply two matrices.",

"Multiply a matrix by a scalar.",

"Find the transpose of a matrix.",

"Calculate the determinant of a 2×2 matrix.",

"Find the inverse of a matrix.",

"Solve simultaneous equations using matrices."

],

applications:[

"Computer Graphics",

"Artificial Intelligence",

"Machine Learning",

"Architecture",

"Structural Engineering",

"Civil Engineering",

"Economics",

"Business Forecasting",

"Image Processing",

"Robotics",

"Cryptography"

],

commonMistakes:[

"Adding matrices of different orders",

"Incorrect matrix multiplication",

"Confusing rows with columns",

"Forgetting multiplication order",

"Incorrect determinant calculation",

"Trying to invert a singular matrix"

],

revisionNotes:[

"Matrices must have the same order for addition and subtraction.",

"Matrix multiplication is generally NOT commutative.",

"A matrix has an inverse only if its determinant is not zero.",

"Always check matrix dimensions before multiplication."

],

examTips:[

"Write matrix orders first.",

"Show every determinant step.",

"Verify multiplication dimensions.",

"Remember that AB ≠ BA in general."

],

practiceQuestions:[

"Find the order of a matrix.",

"Add two matrices.",

"Multiply two matrices.",

"Calculate a determinant.",

"Find an inverse matrix.",

"Solve simultaneous equations using matrices."

],

flashCards:[

{

question:"What is a matrix?",

answer:"A rectangular arrangement of numbers in rows and columns."

},

{

question:"What is the order of a matrix?",

answer:"The number of rows by the number of columns."

},

{

question:"When can matrices be added?",

answer:"Only when they have the same order."

},

{

question:"What is the determinant of a 2×2 matrix?",

answer:"ad − bc"

},

{

question:"When does a matrix have an inverse?",

answer:"When its determinant is not zero."

}

],

mcqs:[

{

question:"Matrices can be added only when:",

options:[

"They contain whole numbers",

"They have the same order",

"They are square",

"They are identity matrices"

],

answer:1

},

{

question:"The determinant of [a b; c d] equals:",

options:[

"ab+cd",

"ad−bc",

"ac−bd",

"ab−cd"

],

answer:1

},

{

question:"Which matrix acts like the number 1 in multiplication?",

options:[

"Zero Matrix",

"Identity Matrix",

"Diagonal Matrix",

"Transpose Matrix"

],

answer:1

},

{

question:"Matrix multiplication is generally:",

options:[

"Commutative",

"Not commutative",

"Always impossible",

"Equal to addition"

],

answer:1

}

],

examQuestions:[

"Define a matrix.",

"Explain different types of matrices.",

"Calculate determinants.",

"Find the inverse of a matrix.",

"Solve simultaneous equations using matrices.",

"Explain applications of matrices."

],

realLifeExamples:[

"3D computer graphics",

"Game development",

"Building design calculations",

"Traffic modelling",

"Robot movement",

"Image transformations",

"Financial forecasting"

],

studyHints:[

"Practice matrix multiplication daily.",

"Draw rows and columns clearly.",

"Always check dimensions first.",

"Use determinants to test invertibility."

],

aiQuestionsStudentsMayAsk:[

"What is a matrix?",

"Why is matrix multiplication different?",

"How do I calculate determinants?",

"When does a matrix have an inverse?",

"How are matrices used in engineering?",

"How do architects use matrices?",

"What is the identity matrix?",

"How do I solve equations using matrices?"

],

aiKeywords:[

"matrix",

"matrices",

"determinant",

"inverse matrix",

"transpose",

"identity matrix",

"matrix multiplication",

"linear equations",

"grade 11 mathematics",

"ethiopian curriculum"

],

relatedChapters:[

"Relations and Functions",

"Rational Expressions and Rational Functions",

"Vectors",

"Transformations of the Plane"

],

difficulty:"Hard",

estimatedStudyTime:"6 Hours",

revisionPriority:"Very High"

}

);
/*=========================================================
PART 1C-2a
MATHEMATICS - GRADE 11
Chapter 4 : Vectors
=========================================================*/

curriculum.Mathematics.grade11.push(

{

id:"MATH_G11_04",

subject:"Mathematics",

grade:11,

chapter:"Vectors",

overview:
"This chapter develops the concept of vectors as mathematical quantities possessing both magnitude and direction. Students learn vector notation, operations, geometric interpretation and applications in science and engineering.",

detailedExplanation:
"Students investigate vector notation, position vectors, vector addition, subtraction, scalar multiplication, vector magnitude, unit vectors and vector applications in geometry and physics. They learn graphical and algebraic methods for solving vector problems and understand how vectors are used in engineering, navigation and computer graphics.",

objectives:[

"Define vectors",

"Distinguish vectors from scalars",

"Represent vectors graphically",

"Represent vectors algebraically",

"Determine vector magnitude",

"Find unit vectors",

"Add vectors",

"Subtract vectors",

"Multiply vectors by scalars",

"Resolve vectors",

"Solve geometric problems using vectors",

"Apply vectors in real-life situations"

],

keyConcepts:[

"Vector",

"Scalar",

"Magnitude",

"Direction",

"Position Vector",

"Unit Vector",

"Resultant Vector",

"Component",

"Parallel Vectors",

"Equal Vectors"

],

importantTerms:[

"Column Vector",

"Cartesian Coordinates",

"Displacement",

"Translation",

"Vector Space"

],

formulas:[

"|a| = √(x²+y²)",

"a+b",

"a−b",

"ka",

"Unit Vector = a/|a|",

"Distance = |AB|"

],

workedExamples:[

"Add two vectors algebraically.",

"Subtract vectors.",

"Find the magnitude of a vector.",

"Determine a unit vector.",

"Represent vectors on the Cartesian plane.",

"Solve a displacement problem.",

"Find the resultant of several vectors."

],

applications:[

"Architecture",

"Structural Engineering",

"Civil Engineering",

"Physics",

"Navigation",

"Robotics",

"Computer Graphics",

"Game Development",

"GPS Technology",

"Aircraft Navigation"

],

commonMistakes:[

"Adding components incorrectly",

"Ignoring vector direction",

"Confusing vectors with scalars",

"Forgetting magnitude symbols",

"Incorrect unit vector calculation"

],

revisionNotes:[

"Always include direction.",

"Add corresponding components only.",

"Check signs carefully.",

"Remember that vectors have both magnitude and direction."

],

examTips:[

"Draw diagrams whenever possible.",

"Write vectors clearly.",

"Calculate magnitude carefully.",

"Check units."

],

practiceQuestions:[

"Find the magnitude of a vector.",

"Determine the resultant vector.",

"Find a unit vector.",

"Represent vectors graphically.",

"Solve displacement problems.",

"Apply vectors in geometry."

],

flashCards:[

{

question:"What is a vector?",

answer:"A quantity having both magnitude and direction."

},

{

question:"What is a scalar?",

answer:"A quantity having magnitude only."

},

{

question:"How is vector magnitude represented?",

answer:"Using vertical bars, for example |a|."

},

{

question:"What is a unit vector?",

answer:"A vector whose magnitude is exactly one."

},

{

question:"What is the resultant vector?",

answer:"The single vector equivalent to two or more vectors combined."

},

{

question:"How do you subtract vectors?",

answer:"Add the opposite (negative) vector."

}

],

mcqs:[

{

question:"Which quantity has both magnitude and direction?",

options:[

"Speed",

"Mass",

"Vector",

"Time"

],

answer:2

},

{

question:"A unit vector has magnitude:",

options:[

"0",

"1",

"10",

"100"

],

answer:1

},

{

question:"Which operation combines two vectors?",

options:[

"Vector addition",

"Square rooting",

"Differentiation",

"Factorization"

],

answer:0

},

{

question:"Velocity is an example of:",

options:[

"Scalar",

"Vector",

"Constant",

"Polynomial"

],

answer:1

},

{

question:"The magnitude of vector (3,4) is:",

options:[

"5",

"6",

"7",

"25"

],

answer:0

}

],

examQuestions:[

"Define a vector.",

"Differentiate vectors and scalars.",

"Find the magnitude of a vector.",

"Determine a unit vector.",

"Solve vector addition problems.",

"Represent vectors graphically.",

"Explain applications of vectors."

],

realLifeExamples:[

"Bridge design",

"Wind acting on buildings",

"Navigation using GPS",

"Aircraft movement",

"Robot arm movement",

"Computer animation",

"Structural analysis"

],

studyHints:[

"Practice vector diagrams daily.",

"Learn component notation.",

"Always verify your calculations geometrically.",

"Relate vectors to real-world motion."

],

learningOutcomes:[

"Represent vectors confidently.",

"Perform vector operations accurately.",

"Use vectors in geometric reasoning.",

"Apply vectors to engineering problems."

],

prerequisiteChapters:[

"Relations and Functions",

"Matrices, Determinants and Their Properties"

],

nextChapters:[

"Transformations of the Plane",

"Statistics and Probability"

],

achievementBadge:"Vector Explorer",

estimatedLessonDuration:"5 Hours",

estimatedPracticeTime:"3 Hours",

difficulty:"Hard",

revisionPriority:"Very High",

aiQuestionsStudentsMayAsk:[

"What is the difference between vectors and scalars?",

"How do I calculate vector magnitude?",

"What is a unit vector?",

"How do I add vectors?",

"How do engineers use vectors?",

"How do architects use vectors?",

"What are vector components?",

"What is a resultant vector?"

],

aiKeywords:[

"vectors",

"vector magnitude",

"unit vector",

"resultant",

"scalar",

"direction",

"components",

"engineering",

"grade 11 mathematics",

"ethiopian curriculum"

],

relatedChapters:[

"Matrices, Determinants and Their Properties",

"Transformations of the Plane",

"Statistics and Probability"

]

}

);
/*=========================================================
PART 1C-2b
MATHEMATICS - GRADE 11
Chapter 5 : Transformations of the Plane
=========================================================*/

curriculum.Mathematics.grade11.push(

{

id:"MATH_G11_05",

subject:"Mathematics",

grade:11,

chapter:"Transformations of the Plane",

overview:
"This chapter introduces geometric transformations on a two-dimensional plane. Students learn how shapes can be translated, reflected, rotated and enlarged while preserving or changing certain geometric properties.",

detailedExplanation:
"Students investigate the four fundamental geometric transformations: translation, reflection, rotation and enlargement (dilation). They analyze how coordinates change under each transformation, determine transformation matrices, identify invariant properties, and solve practical geometry problems involving transformed figures.",

objectives:[

"Define geometric transformation",

"Identify translations",

"Identify reflections",

"Identify rotations",

"Identify enlargements",

"Determine image coordinates",

"Use transformation matrices",

"Describe transformations mathematically",

"Solve coordinate geometry problems",

"Apply transformations in real-life situations"

],

keyConcepts:[

"Translation",

"Reflection",

"Rotation",

"Enlargement",

"Dilation",

"Scale Factor",

"Centre of Rotation",

"Line of Reflection",

"Invariant",

"Image",

"Object"

],

importantTerms:[

"Clockwise Rotation",

"Counterclockwise Rotation",

"Origin",

"Coordinate Plane",

"Transformation Matrix"

],

formulas:[

"Translation: (x,y) → (x+a, y+b)",

"Reflection in x-axis: (x,y) → (x,-y)",

"Reflection in y-axis: (x,y) → (-x,y)",

"Rotation 90°: (x,y) → (-y,x)",

"Rotation 180°: (x,y) → (-x,-y)",

"Rotation 270°: (x,y) → (y,-x)",

"Enlargement: (x,y) → (kx,ky)"

],

workedExamples:[

"Translate a triangle.",

"Reflect a polygon in the x-axis.",

"Rotate a figure 90°.",

"Rotate a figure 180°.",

"Enlarge a shape using scale factor 2.",

"Determine image coordinates after multiple transformations."

],

applications:[

"Architecture",

"Engineering Drawing",

"CAD Software",

"Computer Graphics",

"Animation",

"Robotics",

"Manufacturing",

"Cartography",

"Game Development"

],

commonMistakes:[

"Using the wrong sign during reflection",

"Confusing clockwise with counterclockwise rotation",

"Incorrect enlargement scale factor",

"Forgetting the centre of rotation",

"Incorrect coordinate substitution"

],

revisionNotes:[

"Always sketch the original figure.",

"Label all vertices.",

"Remember the coordinate rules for each transformation.",

"Check orientation after transformation."

],

examTips:[

"Draw coordinate axes clearly.",

"Show every transformation step.",

"Write image coordinates neatly.",

"Verify the final figure."

],

practiceQuestions:[

"Translate a polygon.",

"Reflect a triangle.",

"Rotate a square.",

"Determine image coordinates.",

"Apply enlargement with a given scale factor.",

"Describe a sequence of transformations."

],

flashCards:[

{

question:"What is a translation?",

answer:"A movement that slides a figure without changing its size or orientation."

},

{

question:"What is a reflection?",

answer:"A flip of a figure across a line."

},

{

question:"What is a rotation?",

answer:"A turning of a figure around a fixed point."

},

{

question:"What is enlargement?",

answer:"A transformation that changes the size of a figure using a scale factor."

},

{

question:"Which transformations preserve shape?",

answer:"Translation, reflection and rotation preserve size and shape. Enlargement preserves shape but changes size."

}

],

mcqs:[

{

question:"Which transformation changes only the position of a figure?",

options:[

"Translation",

"Enlargement",

"Stretching",

"Shearing"

],

answer:0

},

{

question:"Reflection in the x-axis changes (x,y) into:",

options:[

"(x,-y)",

"(-x,y)",

"(-x,-y)",

"(y,x)"

],

answer:0

},

{

question:"A 180° rotation about the origin changes (x,y) into:",

options:[

"(y,x)",

"(-x,-y)",

"(-y,x)",

"(x,-y)"

],

answer:1

},

{

question:"Which transformation changes the size of a figure?",

options:[

"Reflection",

"Translation",

"Enlargement",

"Rotation"

],

answer:2

},

{

question:"Translation preserves:",

options:[

"Shape and size",

"Only area",

"Only perimeter",

"Only angles"

],

answer:0

}

],

examQuestions:[

"Define geometric transformation.",

"Differentiate translation and reflection.",

"Rotate a figure by 90°.",

"Reflect a polygon in the y-axis.",

"Enlarge a triangle using a given scale factor.",

"Describe successive transformations."

],

realLifeExamples:[

"Blueprint design",

"Architectural floor plans",

"Bridge design",

"Computer animation",

"Mobile phone graphics",

"Video games",

"Satellite mapping",

"Logo design"

],

studyHints:[

"Practice graph paper drawings.",

"Learn coordinate rules by memory.",

"Check each transformed point.",

"Visualize movements before calculating."

],

learningOutcomes:[

"Recognize all plane transformations.",

"Transform figures accurately.",

"Solve coordinate geometry problems.",

"Apply transformations to engineering graphics."

],

prerequisiteChapters:[

"Vectors",

"Relations and Functions"

],

nextChapters:[

"Statistics and Probability"

],

achievementBadge:"Transformation Master",

estimatedLessonDuration:"5 Hours",

estimatedPracticeTime:"3 Hours",

difficulty:"Hard",

revisionPriority:"Very High",

aiQuestionsStudentsMayAsk:[

"What is the difference between translation and rotation?",

"How do I reflect a point across the x-axis?",

"How do I rotate a shape?",

"What is enlargement?",

"What is a scale factor?",

"Why are transformations important in architecture?",

"How are transformations used in computer graphics?"

],

aiKeywords:[

"transformation",

"translation",

"reflection",

"rotation",

"enlargement",

"dilation",

"geometry",

"coordinate plane",

"grade 11 mathematics",

"ethiopian curriculum"

],

relatedChapters:[

"Vectors",

"Matrices, Determinants and Their Properties",

"Statistics and Probability"

]

}

);
/*=========================================================
PART 1C-2c
MATHEMATICS - GRADE 11
Chapter 6 : Statistics and Probability
=========================================================*/

curriculum.Mathematics.grade11.push(

{

id:"MATH_G11_06",

subject:"Mathematics",

grade:11,

chapter:"Statistics and Probability",

overview:
"This chapter develops students' ability to collect, organize, analyze and interpret data while introducing probability distributions and statistical reasoning for informed decision-making.",

detailedExplanation:
"Students study methods of data collection, frequency distributions, graphical representation, measures of central tendency and dispersion, probability rules, conditional probability, random variables and practical statistical applications. The chapter emphasizes interpreting data correctly and using probability to predict uncertain events.",

objectives:[

"Collect and organize data",

"Construct frequency tables",

"Draw statistical graphs",

"Calculate mean",

"Calculate median",

"Calculate mode",

"Calculate variance",

"Calculate standard deviation",

"Interpret statistical data",

"Determine probabilities",

"Apply probability rules",

"Solve practical statistical problems"

],

keyConcepts:[

"Population",

"Sample",

"Frequency",

"Histogram",

"Bar Chart",

"Pie Chart",

"Mean",

"Median",

"Mode",

"Range",

"Variance",

"Standard Deviation",

"Probability",

"Random Variable",

"Conditional Probability"

],

importantTerms:[

"Sample Space",

"Event",

"Outcome",

"Independent Events",

"Dependent Events",

"Mutually Exclusive Events"

],

formulas:[

"Mean = Σx / n",

"Range = Maximum − Minimum",

"P(A)=n(A)/n(S)",

"P(A')=1−P(A)",

"P(A∪B)=P(A)+P(B)-P(A∩B)",

"P(A|B)=P(A∩B)/P(B)",

"Variance = Σ(x−x̄)² / n",

"Standard Deviation = √Variance"

],

workedExamples:[

"Calculate the arithmetic mean.",

"Determine the median from grouped data.",

"Calculate the mode.",

"Find the variance.",

"Calculate the standard deviation.",

"Find the probability of an event.",

"Solve conditional probability problems.",

"Interpret statistical graphs."

],

applications:[

"Medical Research",

"Business Forecasting",

"Economics",

"Engineering",

"Agriculture",

"Meteorology",

"Population Studies",

"Artificial Intelligence",

"Quality Control",

"Scientific Research"

],

commonMistakes:[

"Using the wrong denominator",

"Confusing population with sample",

"Incorrect graph interpretation",

"Confusing independent and dependent events",

"Forgetting complement probability",

"Calculation errors in variance"

],

revisionNotes:[

"Always organize data first.",

"Label graphs correctly.",

"Probability values lie between 0 and 1.",

"Standard deviation measures data spread.",

"Check calculations carefully."

],

examTips:[

"Show every calculation step.",

"State formulas before substitution.",

"Draw graphs neatly.",

"Interpret results in words.",

"Check probability answers."

],

practiceQuestions:[

"Calculate the mean.",

"Determine the median.",

"Calculate variance.",

"Find the standard deviation.",

"Construct a histogram.",

"Determine probabilities.",

"Interpret statistical information."

],

flashCards:[

{

question:"What is the mean?",

answer:"The average obtained by dividing the total by the number of observations."

},

{

question:"What is probability?",

answer:"A measure of how likely an event is to occur."

},

{

question:"What is variance?",

answer:"A measure of how spread out data values are."

},

{

question:"What is standard deviation?",

answer:"The square root of the variance."

},

{

question:"What is a sample?",

answer:"A subset of a population used for statistical analysis."

},

{

question:"What is a mutually exclusive event?",

answer:"Two events that cannot occur at the same time."

}

],

mcqs:[

{

question:"Probability values always lie between:",

options:[

"-1 and 1",

"0 and 1",

"0 and 100",

"1 and 10"

],

answer:1

},

{

question:"Which measure represents the average?",

options:[

"Median",

"Mode",

"Mean",

"Range"

],

answer:2

},

{

question:"Variance measures:",

options:[

"Location",

"Spread",

"Shape",

"Frequency"

],

answer:1

},

{

question:"The complement of an event A is:",

options:[

"P(A)",

"P(A')",

"P(A∪B)",

"P(A∩B)"

],

answer:1

},

{

question:"A histogram is mainly used for:",

options:[

"Displaying continuous data",

"Writing equations",

"Drawing circles",

"Finding vectors"

],

answer:0

}

],

examQuestions:[

"Define probability.",

"Differentiate sample and population.",

"Calculate the standard deviation.",

"Construct and interpret a histogram.",

"Solve conditional probability problems.",

"Interpret statistical data."

],

realLifeExamples:[

"Election opinion polls",

"Rainfall analysis",

"Business profit prediction",

"Hospital patient records",

"Traffic flow analysis",

"Construction quality control",

"Sports statistics",

"Machine learning datasets"

],

studyHints:[

"Practice calculations regularly.",

"Memorize probability rules.",

"Interpret graphs before calculating.",

"Always write units where appropriate."

],

learningOutcomes:[

"Analyze real-world data.",

"Interpret statistical graphs confidently.",

"Apply probability to practical situations.",

"Make evidence-based decisions."

],

prerequisiteChapters:[

"Relations and Functions",

"Vectors"

],

nextChapters:[

"Grade 12 Mathematics"

],

achievementBadge:"Statistics Expert",

estimatedLessonDuration:"6 Hours",

estimatedPracticeTime:"4 Hours",

difficulty:"Hard",

revisionPriority:"Very High",

aiQuestionsStudentsMayAsk:[

"What is standard deviation?",

"What is variance?",

"How do I calculate probability?",

"What is conditional probability?",

"How do I interpret a histogram?",

"What is the difference between sample and population?",

"How is statistics used in engineering?",

"Why is probability important in science?"

],

aiKeywords:[

"statistics",

"probability",

"mean",

"median",

"mode",

"variance",

"standard deviation",

"histogram",

"sample",

"population",

"grade 11 mathematics",

"ethiopian curriculum"

],

relatedChapters:[

"Relations and Functions",

"Vectors",

"Transformations of the Plane"

]

}

);
`;


