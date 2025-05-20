 export  const AI = {
    Python: [
      {
        id: 1,
        topic: "Python Basics",
        points: [
          "Variables and Data Types", "Type Conversion", "Input/Output Functions", "Arithmetic and Logical Operators",
          "String Manipulation", "Indentation and Syntax Rules", "Comments and Docstrings", "Conditional Statements",
          "Loops (for, while)", "break and continue", "range() Function", "Enumerate and Zip",
        ]
      },
      {
        id: 2,
        topic: "Data Structures",
        points: [
          "Lists", "Tuples", "Sets", "Dictionaries", "Nested Structures", "List Comprehensions", "Set Operations",
          "Dictionary Comprehensions", "Slicing Techniques", "Mutability & Immutability", "Inbuilt Methods", "Sorting Structures",
          "Iterating Structures"
        ]
      },
      {
        id: 3,
        topic: "File Handling",
        points: [
          "Reading Text Files", "Writing to Files", "File Modes", "Working with CSV Files", "Reading JSON", "Writing JSON",
          "Using the `with` statement", "Exception Handling with Files", "Binary Files", "Pickle Module", "File Pointers", 
          "Closing Files", "Reading Line by Line"
        ]
      },
      {
        id: 4,
        topic: "OOP in Python",
        points: [
          "Classes and Objects", "Attributes and Methods", "Constructor (__init__)", "Inheritance", "Multiple Inheritance",
          "Method Overriding", "Encapsulation", "Polymorphism", "Magic Methods", "Static and Class Methods", "Getters and Setters",
          "Composition", "Object Lifecycle"
        ]
      },
      {
        id: 5,
        topic: "Error and Exception Handling",
        points: [
          "try-except Block", "finally Block", "else with try", "Common Exceptions", "Raising Exceptions", "Custom Exceptions",
          "Assertion Errors", "Logging Errors", "Stack Traces", "Using traceback Module", "Debugging Tools",
          "Handling File Exceptions", "Nested try Blocks"
        ]
      },
      {
        id: 6,
        topic: "Popular Python Libraries",
        points: [
          "NumPy Basics", "Array Operations", "Pandas Series and DataFrames", "Data Cleaning in Pandas", "Matplotlib for Charts",
          "Seaborn for Advanced Visualization", "Scikit-learn Overview", "Regular Expressions (re)", "Datetime Module",
          "OS Module", "Requests Library", "Web Scraping with BeautifulSoup", "Using Virtual Environments"
        ]
      }
    ],
    Statistics: [
      {
        id: 1,
        topic: "Descriptive Statistics",
        points: [
          "Mean", "Median", "Mode", "Range", "Variance", "Standard Deviation", "Percentiles", "Quartiles", 
          "Interquartile Range", "Skewness", "Kurtosis", "Summary Statistics", "Boxplots"
        ]
      },
      {
        id: 2,
        topic: "Probability Theory",
        points: [
          "Sample Space and Events", "Independent and Dependent Events", "Mutually Exclusive Events",
          "Conditional Probability", "Bayes’ Theorem", "Addition Rule", "Multiplication Rule", 
          "Joint and Marginal Probabilities", "Random Variables", "Expected Value", "Variance of Random Variables"
        ]
      },
      {
        id: 3,
        topic: "Distributions",
        points: [
          "Normal Distribution", "Binomial Distribution", "Poisson Distribution", "Uniform Distribution",
          "Exponential Distribution", "Central Limit Theorem", "Z-distribution", "T-distribution", 
          "Chi-Square Distribution", "Probability Density Functions", "Probability Mass Functions",
          "Visualizing Distributions"
        ]
      },
      {
        id: 4,
        topic: "Inferential Statistics",
        points: [
          "Population vs Sample", "Sampling Techniques", "Hypothesis Testing", "Null and Alternative Hypothesis",
          "Significance Level", "p-value Interpretation", "One-tailed and Two-tailed Tests", 
          "Type I and II Errors", "Confidence Intervals", "T-tests", "Z-tests", "Chi-square Tests"
        ]
      },
      {
        id: 5,
        topic: "Correlation & Regression",
        points: [
          "Scatter Plots", "Pearson Correlation", "Spearman Rank Correlation", "Simple Linear Regression",
          "Multiple Linear Regression", "Regression Assumptions", "Coefficient Interpretation", 
          "R-squared and Adjusted R-squared", "Residual Analysis", "Detecting Outliers",
          "Multicollinearity", "Overfitting in Regression"
        ]
      },
      {
        id: 6,
        topic: "Statistical Tools",
        points: [
          "Z-scores", "Standard Error", "T-distribution Tables", "ANOVA", "Chi-square Test", "Statistical Power",
          "Effect Size", "Confidence Levels", "Statistical Software (Excel, R, Python)", "Data Cleaning Techniques",
          "Histograms and Frequency Tables", "Box Plots", "Q-Q Plots"
        ]
      }
    ],
    MachineLearning: [
      {
        id: 1,
        topic: "Supervised Learning",
        points: [
          "Linear Regression", "Logistic Regression", "Decision Trees", "Random Forest", "K-Nearest Neighbors",
          "Support Vector Machines", "Naive Bayes", "Evaluation Metrics", "Overfitting & Underfitting", 
          "Bias-Variance Tradeoff", "Hyperparameter Tuning", "Cross Validation"
        ]
      },
      {
        id: 2,
        topic: "Unsupervised Learning",
        points: [
          "K-Means Clustering", "Hierarchical Clustering", "DBSCAN", "Dimensionality Reduction", 
          "PCA (Principal Component Analysis)", "t-SNE", "Association Rule Mining", 
          "Apriori Algorithm", "Distance Metrics", "Silhouette Score", "Cluster Validation"
        ]
      },
      {
        id: 3,
        topic: "Model Evaluation",
        points: [
          "Confusion Matrix", "Accuracy", "Precision", "Recall", "F1 Score", "ROC Curve", "AUC", 
          "K-fold Cross Validation", "Train-Test Split", "Hold-out Validation", "Grid Search", 
          "Learning Curves", "Bias-Variance Analysis"
        ]
      },
      {
        id: 4,
        topic: "Feature Engineering",
        points: [
          "Missing Value Imputation", "Label Encoding", "One-Hot Encoding", "Scaling (MinMax, Standard)", 
          "Binning", "Polynomial Features", "Log Transform", "Feature Selection Methods", 
          "Correlation Matrix", "Variance Threshold", "Recursive Feature Elimination"
        ]
      },
      {
        id: 5,
        topic: "Model Deployment",
        points: [
          "Saving Models (Pickle/Joblib)", "Creating REST APIs", "Using Flask for Deployment", 
          "FastAPI Overview", "Streamlit Dashboards", "Dockerizing ML Models", 
          "Monitoring Models", "Versioning", "CI/CD Pipelines", "Cloud Deployment Options",
          "Integrating with Frontend", "Performance Monitoring"
        ]
      },
      {
        id: 6,
        topic: "ML Tools & Libraries",
        points: [
          "Scikit-learn", "Pandas for ML", "Matplotlib & Seaborn", "XGBoost", "LightGBM", 
          "Statsmodels", "TensorFlow/Keras Overview", "MLflow", "Weka", "AutoML Tools", 
          "Google Colab", "Jupyter Notebooks", "Model Explainability Tools"
        ]
      }
    ],
    GenerativeAi: [
      {
        id: 1,
        topic: "Introduction to Generative AI",
        points: [
          "Definition and Overview", "Types of Generative Models", "Use Cases", "Generative vs Traditional AI",
          "History and Evolution", "Recent Breakthroughs", "Popular Models", "Limitations", 
          "Ethical Considerations", "Applications in Industry", "Real-life Demos"
        ]
      },
      {
        id: 2,
        topic: "Text Generation",
        points: [
          "Language Models", "GPT Models", "Prompt Engineering", "Tokenization", "Context Window", 
          "Top-k Sampling", "Temperature Control", "Beam Search", "Transformers", 
          "Fine-tuning LLMs", "ChatGPT and APIs", "Practical Applications"
        ]
      },
      {
        id: 3,
        topic: "Image Generation",
        points: [
          "GANs (Generative Adversarial Networks)", "StyleGAN", "Image-to-Image Translation", 
          "Diffusion Models", "Stable Diffusion", "DALL·E", "ControlNet", "Pix2Pix", 
          "CycleGAN", "Latent Space", "Prompt Crafting for Images"
        ]
      },
      {
        id: 4,
        topic: "Audio & Video Generation",
        points: [
          "Text-to-Speech (TTS)", "Voice Cloning", "Music Generation", "Deepfakes", 
          "AI Video Avatars", "Video Enhancement", "Lip Syncing AI", "Audio Diffusion Models", 
          "AI Video Editors", "OpenAI’s Jukebox", "ElevenLabs & Synthesia"
        ]
      },
      {
        id: 5,
        topic: "Ethical Considerations",
        points: [
          "AI Bias", "Deepfake Threats", "Data Privacy", "Misinformation", 
          "Content Authenticity", "AI Watermarking", "Regulation Needs", 
          "OpenAI’s Use Policies", "Model Transparency", "Bias Mitigation", "Fairness in AI"
        ]
      },
      {
        id: 6,
        topic: "Hands-On Projects",
        points: [
          "Chatbot using GPT", "AI Art Creator", "Resume Generator", "Lyrics Composer", 
          "AI Story Generator", "Face Aging App", "Voice Cloner", "Text Summarizer",
          "Poetry Generator", "Code Assistant", "AI Image Editor"
        ]
      }
    ],
    DeepLearning: [
        {
          id: 1,
          topic: "Neural Networks Basics",
          points: [
            "Perceptron", "Activation Functions", "Feedforward Networks",
            "Loss Functions", "Backpropagation", "Gradient Descent",
            "Overfitting & Regularization", "Weight Initialization",
            "Batch Size and Epochs", "Vanishing Gradient Problem",
            "ReLU, Sigmoid, Tanh", "Dropout", "Model Compilation",
            "Keras Sequential API", "Training and Evaluation"
          ]
        },
        {
          id: 2,
          topic: "CNNs (Convolutional Neural Networks)",
          points: [
            "Convolutions", "Filters and Feature Maps", "Stride and Padding",
            "Pooling Layers", "CNN Architectures", "Transfer Learning",
            "Data Augmentation", "VGG, ResNet, Inception", "Fine-Tuning Pretrained Models",
            "Image Classification", "Batch Normalization", "Global Average Pooling",
            "Object Detection Basics", "TensorBoard Visualization", "ImageNet Dataset"
          ]
        },
        {
          id: 3,
          topic: "RNNs and Sequence Models",
          points: [
            "RNN Cell Mechanics", "Vanishing Gradient in RNNs", "LSTMs",
            "GRUs", "Bidirectional RNNs", "Encoder-Decoder Architecture",
            "Applications in Time Series", "Text Generation",
            "Sentiment Analysis", "Sequence to Sequence Models",
            "Padding and Masking", "Beam Search", "Teacher Forcing",
            "Attention Mechanism Intro", "Use Cases in NLP"
          ]
        },
        {
          id: 4,
          topic: "Transformers",
          points: [
            "Self-Attention Mechanism", "Multi-Head Attention",
            "Positional Encoding", "Transformer Architecture",
            "BERT", "GPT Architecture", "Masked Language Modeling",
            "Causal Language Modeling", "Pretraining vs Fine-Tuning",
            "Hugging Face Transformers", "Transformer Visualization Tools",
            "Embedding Layers", "Applications in Text & Vision",
            "Tokenization Techniques", "Large Language Models (LLMs)"
          ]
        },
        {
          id: 5,
          topic: "GANs and VAEs",
          points: [
            "GAN Architecture", "Generator and Discriminator",
            "Training GANs", "Mode Collapse Problem", 
            "Conditional GANs", "DCGAN", "CycleGAN", 
            "Applications in Image Generation", "VAE Introduction", 
            "Encoder and Decoder Network", "Latent Space Sampling", 
            "KL Divergence", "Reconstruction Loss", "Comparison with GANs",
            "Use Cases in Healthcare and Art"
          ]
        },
        {
          id: 6,
          topic: "Optimization and Regularization",
          points: [
            "Gradient Descent Variants", "Adam, RMSprop, SGD",
            "Learning Rate Schedulers", "Early Stopping",
            "L1 and L2 Regularization", "Dropout", 
            "Batch Normalization", "Weight Decay",
            "Overfitting Solutions", "Training Curves Monitoring",
            "Hyperparameter Optimization", "Grid Search vs Random Search",
            "Bayesian Optimization", "Loss Landscape", "Best Practices"
          ]
        },
      ],
    
      NLP: [
        {
          id: 1,
          topic: "Text Preprocessing",
          points: [
            "Tokenization", "Lowercasing", "Stopword Removal",
            "Stemming", "Lemmatization", "Removing Punctuation",
            "Regular Expressions in Text", "Handling Emojis and Symbols",
            "Spelling Correction", "N-grams", "Text Normalization",
            "Handling Contractions", "Slang Translation", "Removing HTML Tags",
            "Noise Removal"
          ]
        },
        {
          id: 2,
          topic: "Text Representation",
          points: [
            "Bag of Words (BoW)", "TF-IDF", "Word2Vec", 
            "GloVe", "FastText", "Embeddings in Keras",
            "Contextual Embeddings", "Sentence Embeddings",
            "BERT Embeddings", "Encoding Large Documents",
            "Document Vectors", "Cosine Similarity", "Euclidean Distance",
            "Text Vectorization", "Choosing Representation"
          ]
        },
        {
          id: 3,
          topic: "Text Classification",
          points: [
            "Sentiment Analysis", "Spam Detection", "Topic Categorization",
            "Naive Bayes", "Logistic Regression for Text", "SVM for Text",
            "Neural Networks for Text", "Confusion Matrix in NLP",
            "Precision/Recall in Text Tasks", "Multiclass Text Classification",
            "Handling Imbalanced Text", "Text Labeling", "Sklearn Pipelines",
            "TextBlob and Vader", "Evaluation Techniques"
          ]
        },
        {
          id: 4,
          topic: "Sequence-to-Sequence Models",
          points: [
            "Encoder-Decoder Model", "Machine Translation",
            "Text Summarization", "Named Entity Recognition (NER)",
            "Part-of-Speech Tagging", "Attention in Seq2Seq",
            "Beam Search Decoding", "Teacher Forcing", 
            "BLEU Score", "ROUGE Score", "Token Masking",
            "Word Alignment", "Seq2Seq in Transformers", 
            "Applications in Chatbots", "Dialog Systems"
          ]
        },
        {
          id: 5,
          topic: "Transformers in NLP",
          points: [
            "BERT", "GPT", "T5", "XLNet", 
            "Transformer Architecture Recap", "Transfer Learning with Transformers",
            "Masked Language Modeling", "Next Token Prediction", 
            "Fine-tuning for Specific Tasks", "Token Classification",
            "Text Generation", "Summarization with Transformers",
            "Question Answering", "Open vs Closed Book QA",
            "Multilingual Transformers"
          ]
        },
        {
          id: 6,
          topic: "Real-world NLP Projects",
          points: [
            "Text Classification API", "News Summarizer", "AI Chatbot",
            "Resume Parser", "Sentiment Dashboard", "Product Review Analyzer",
            "Language Detector", "FAQ Bot", "Voice Assistant (with Speech APIs)",
            "Real-time Translation", "Search Engine with NLP", "Grammar Checker",
            "Email Classifier", "Plagiarism Checker", "NLP with LangChain"
          ]
        },
      ],
      // PythonDup: [
      //   {
      //     id: 1,
      //     topic: "Python Basics",
      //     points: [
      //       "Variables and Data Types", "Type Conversion", "Input/Output Functions", "Arithmetic and Logical Operators",
      //       "String Manipulation", "Indentation and Syntax Rules", "Comments and Docstrings", "Conditional Statements",
      //       "Loops (for, while)", "break and continue", "range() Function", "Enumerate and Zip", "Basic Code Structure"
      //     ]
      //   },
      //   {
      //     id: 2,
      //     topic: "Data Structures",
      //     points: [
      //       "Lists", "Tuples", "Sets", "Dictionaries", "Nested Structures", "List Comprehensions", "Set Operations",
      //       "Dictionary Comprehensions", "Slicing Techniques", "Mutability & Immutability", "Inbuilt Methods", "Sorting Structures",
      //       "Iterating Structures"
      //     ]
      //   },
      //   {
      //     id: 3,
      //     topic: "File Handling",
      //     points: [
      //       "Reading Text Files", "Writing to Files", "File Modes", "Working with CSV Files", "Reading JSON", "Writing JSON",
      //       "Using the `with` statement", "Exception Handling with Files", "Binary Files", "Pickle Module", "File Pointers", 
      //       "Closing Files", "Reading Line by Line"
      //     ]
      //   },
      //   {
      //     id: 4,
      //     topic: "OOP in Python",
      //     points: [
      //       "Classes and Objects", "Attributes and Methods", "Constructor (__init__)", "Inheritance", "Multiple Inheritance",
      //       "Method Overriding", "Encapsulation", "Polymorphism", "Magic Methods", "Static and Class Methods", "Getters and Setters",
      //       "Composition", "Object Lifecycle"
      //     ]
      //   },
      //   {
      //     id: 5,
      //     topic: "Error and Exception Handling",
      //     points: [
      //       "try-except Block", "finally Block", "else with try", "Common Exceptions", "Raising Exceptions", "Custom Exceptions",
      //       "Assertion Errors", "Logging Errors", "Stack Traces", "Using traceback Module", "Debugging Tools",
      //       "Handling File Exceptions", "Nested try Blocks"
      //     ]
      //   },
      //   {
      //     id: 6,
      //     topic: "Popular Python Libraries",
      //     points: [
      //       "NumPy Basics", "Array Operations", "Pandas Series and DataFrames", "Data Cleaning in Pandas", "Matplotlib for Charts",
      //       "Seaborn for Advanced Visualization", "Scikit-learn Overview", "Regular Expressions (re)", "Datetime Module",
      //       "OS Module", "Requests Library", "Web Scraping with BeautifulSoup", "Using Virtual Environments"
      //     ]
      //   }
      // ],
      // Statisticsdup: [
      //   {
      //     id: 1,
      //     topic: "Descriptive Statistics",
      //     points: [
      //       "Mean", "Median", "Mode", "Range", "Variance", "Standard Deviation", "Percentiles", "Quartiles", 
      //       "Interquartile Range", "Skewness", "Kurtosis", "Summary Statistics", "Boxplots"
      //     ]
      //   },
      //   {
      //     id: 2,
      //     topic: "Probability Theory",
      //     points: [
      //       "Sample Space and Events", "Independent and Dependent Events", "Mutually Exclusive Events",
      //       "Conditional Probability", "Bayes’ Theorem", "Addition Rule", "Multiplication Rule", 
      //       "Joint and Marginal Probabilities", "Random Variables", "Expected Value", "Variance of Random Variables"
      //     ]
      //   },
      //   {
      //     id: 3,
      //     topic: "Distributions",
      //     points: [
      //       "Normal Distribution", "Binomial Distribution", "Poisson Distribution", "Uniform Distribution",
      //       "Exponential Distribution", "Central Limit Theorem", "Z-distribution", "T-distribution", 
      //       "Chi-Square Distribution", "Probability Density Functions", "Probability Mass Functions",
      //       "Visualizing Distributions"
      //     ]
      //   },
      //   {
      //     id: 4,
      //     topic: "Inferential Statistics",
      //     points: [
      //       "Population vs Sample", "Sampling Techniques", "Hypothesis Testing", "Null and Alternative Hypothesis",
      //       "Significance Level", "p-value Interpretation", "One-tailed and Two-tailed Tests", 
      //       "Type I and II Errors", "Confidence Intervals", "T-tests", "Z-tests", "Chi-square Tests"
      //     ]
      //   },
      //   {
      //     id: 5,
      //     topic: "Correlation & Regression",
      //     points: [
      //       "Scatter Plots", "Pearson Correlation", "Spearman Rank Correlation", "Simple Linear Regression",
      //       "Multiple Linear Regression", "Regression Assumptions", "Coefficient Interpretation", 
      //       "R-squared and Adjusted R-squared", "Residual Analysis", "Detecting Outliers",
      //       "Multicollinearity", "Overfitting in Regression"
      //     ]
      //   },
      //   {
      //     id: 6,
      //     topic: "Statistical Tools",
      //     points: [
      //       "Z-scores", "Standard Error", "T-distribution Tables", "ANOVA", "Chi-square Test", "Statistical Power",
      //       "Effect Size", "Confidence Levels", "Statistical Software (Excel, R, Python)", "Data Cleaning Techniques",
      //       "Histograms and Frequency Tables", "Box Plots", "Q-Q Plots"
      //     ]
      //   }
      // ],
      // MachineDup: [
      //   {
      //     id: 1,
      //     topic: "Supervised Learning",
      //     points: [
      //       "Linear Regression", "Logistic Regression", "Decision Trees", "Random Forest", "K-Nearest Neighbors",
      //       "Support Vector Machines", "Naive Bayes", "Evaluation Metrics", "Overfitting & Underfitting", 
      //       "Bias-Variance Tradeoff", "Hyperparameter Tuning", "Cross Validation"
      //     ]
      //   },
      //   {
      //     id: 2,
      //     topic: "Unsupervised Learning",
      //     points: [
      //       "K-Means Clustering", "Hierarchical Clustering", "DBSCAN", "Dimensionality Reduction", 
      //       "PCA (Principal Component Analysis)", "t-SNE", "Association Rule Mining", 
      //       "Apriori Algorithm", "Distance Metrics", "Silhouette Score", "Cluster Validation"
      //     ]
      //   },
      //   {
      //     id: 3,
      //     topic: "Model Evaluation",
      //     points: [
      //       "Confusion Matrix", "Accuracy", "Precision", "Recall", "F1 Score", "ROC Curve", "AUC", 
      //       "K-fold Cross Validation", "Train-Test Split", "Hold-out Validation", "Grid Search", 
      //       "Learning Curves", "Bias-Variance Analysis"
      //     ]
      //   },
      //   {
      //     id: 4,
      //     topic: "Feature Engineering",
      //     points: [
      //       "Missing Value Imputation", "Label Encoding", "One-Hot Encoding", "Scaling (MinMax, Standard)", 
      //       "Binning", "Polynomial Features", "Log Transform", "Feature Selection Methods", 
      //       "Correlation Matrix", "Variance Threshold", "Recursive Feature Elimination"
      //     ]
      //   },
      //   {
      //     id: 5,
      //     topic: "Model Deployment",
      //     points: [
      //       "Saving Models (Pickle/Joblib)", "Creating REST APIs", "Using Flask for Deployment", 
      //       "FastAPI Overview", "Streamlit Dashboards", "Dockerizing ML Models", 
      //       "Monitoring Models", "Versioning", "CI/CD Pipelines", "Cloud Deployment Options",
      //       "Integrating with Frontend", "Performance Monitoring"
      //     ]
      //   },
      //   {
      //     id: 6,
      //     topic: "ML Tools & Libraries",
      //     points: [
      //       "Scikit-learn", "Pandas for ML", "Matplotlib & Seaborn", "XGBoost", "LightGBM", 
      //       "Statsmodels", "TensorFlow/Keras Overview", "MLflow", "Weka", "AutoML Tools", 
      //       "Google Colab", "Jupyter Notebooks", "Model Explainability Tools"
      //     ]
      //   }
      // ],

    };
  

export const backend={
  SQLandDatabases:[
        {
          id: 1,
          topic: "Fundamentals",
          points: [
            "What is a database? ", "RDBMS concepts", "Data types, constraints, keys"
          ]
        },
        {
          id: 2,
          topic: "SQL Operations",
          points: [
            "DDL, DML, DQL", "SELECT, WHERE, GROUP BY ,ORDER BY", "Joins and subqueries", "Aggregate functions"
          ]
        },
        {
          id: 3,
          topic: "Advanced Topics",
          points: [
            "Transactions and ACID properties", "Indexing", "Query optimization"
          ]
        }
  ],
  CoreJava:[
     {
          id: 1,
          topic: "Java Basics",
          points: [
            "Variables, data types", "Loops and control statements", "Arrays and strings"
          ]
        },
        {
          id: 2,
          topic: "OOP Concepts",
          points: [
            "Classes and objects", "Inheritance and polymorphism", "Interfaces and encapsulation"
          ]
        },
        {
          id: 3,
          topic: "Essentials",
          points: [
            "Exception handling", "Multi-threading", "File I/O"
          ]
        },
        {
          id: 4,
          topic: "Serialization",
          points: [
            "Save and restore object state with serialization/deserialization"
          ]
        }
  ],
  DataStructuresAndAlgorithms:[
    {
          id: 1,
          topic: "Core Structures",
          points: [
            "Arrays", "Linked Lists", "Stacks & Queues","Trees & HashMaps"
          ]
        },
        {
          id: 2,
          topic: "Algorithms",
          points: [
            "Searching & sorting", "Recursion", "Greedy algorithms", "Dynamic programming"
          ]
        },
        {
          id: 3,
          topic: "Use Cases",
          points: [
            "Applying DSA in backend dev scenarios: caching, routing, etc"
          ]
        }
  ],
  AdvancedJava:[
    {
          id: 1,
          topic: "J2EE",
          points: [
            "Servlets and JSP", "JDBC", "Session management"
          ]
        },
        {
          id: 2,
          topic: "Hibernate",
          points: [
            "ORM basics", "Entity relationships", "HQL and caching"
          ]
        },
        {
          id: 3,
          topic: "Spring Framework",
          points: [
            "Spring Boot basics","REST API creation","Pagination, sorting","Basic security setup"
          ]
        }
  ]
}

export const frontend={
  WebDevelopmentBasics :[
        {
          id: 1,
          topic: "Introduction",
          points: [
            "What is Web Development?", "Types of websites", "Tools you'll need"
          ]
        },
        {
          id: 2,
          topic: "HTML",
          points: [
            "Page structure", "Elements & attributes", "Forms & tables", "Semantic tags"
          ]
        },
        {
          id: 3,
          topic: "CSS",
          points: [
            "Selectors & properties", "Box model", "Flexbox & Grid","Media queries","SASS basics"
          ]
        },
        {
          id: 4,
          topic: "JavaScript Basics",
          points: [
            "Variables & types", "Operators", "Functions","DOM manipulation","ES6 features"
          ]
        }
  ],
  AdvancedJavascript :[
     {
          id: 1,
          topic: "Async Programming",
          points: [
            "Callbacks", "Promises", "async/await","Fetch API"
          ]
        },
        {
          id: 2,
          topic: "Modern JS",
          points: [
            "Destructuring", "Spread/Rest", "Classes & modules"
          ]
        },
        {
          id: 3,
          topic: "Debugging",
          points: [
            "try...catch", "Browser tools"
          ]
        },
        {
          id: 4,
          topic: "Mini Project",
          points: [
            "Build interactive forms & modals"
          ]
        }
  ],
  VersionControlAndTools :[
    {
          id: 1,
          topic: "Git & GitHub",
          points: [
            "Repositories", "Branches", "Commits","Pull requests"
          ]
        },
        {
          id: 2,
          topic: "Package Managers",
          points: [
            "npm & yarn basics"
          ]
        },
        {
          id: 3,
          topic: "Bundlers",
          points: [
            "Webpack or Vite basics"
          ]
        }
  ],
  ReactJs:[
    {
          id: 1,
          topic: "Core Concepts",
          points: [
            "Functional/class components","Props & state", "JSX", "Lifecycle methods"
          ]
        },
        {
          id: 2,
          topic: "Advanced Concepts",
          points: [
            "Hooks: useState,useEffect useContext", "React Router", "Context API","Redux (intro)"
          ]
        },
        {
          id: 3,
          topic: "Capstone Project",
          points: [
            "Build a dynamic React-based site with modals & forms"
          ]
        }
  ]
}

export const UIUX={
  UIUXFoundations :[
        {
          id: 1,
          topic: "Introduction to UI/UX & Design Thinking",
          points: [
            "What is UI/UX?", "Difference between Ul and UX", "Design Thinking process","Importance of User-Centered Design"
          ]
        }
  ],
  ResearchAndStrategy  :[
     {
          id: 1,
          topic: "User Research & Empathy Mapping",
          points: [
            "Understanding user needs", "Empathy maps & personas", "User journey mapping","Interviews and surveys"
          ]
        },
        {
          id: 2,
          topic: "Competitor Analysis & Problem Definition",
          points: [
            "Conducting competitor research", "Defining problem statements", "Identifying user pain points","Setting goals and success metrics"
          ]
        }
  ],
  DesignAndPrototyping  :[
    {
          id: 1,
          topic: "Information Architecture & Wireframing",
          points: [
            "Basics of IA", "Low-fidelity wireframes", "Tools intro: Figma / Adobe XD / Sketch"
          ]
        },
        {
          id: 2,
          topic: "Visual Design & UI Components",
          points: [
            "Typography & color theory","Iconography & UI patterns","Layouts & grid systems"
          ]
        },
        {
          id: 3,
          topic: "Design Systems & Style Guides",
          points: [
            "Creating consistent Ul systems","Style guides","Material Design & Human Interface Guidelines"
          ]
        },
        {
          id: 4,
          topic: "Prototyping & Interactive Design",
          points: [
            "Mid-to-high-fidelity prototypes","Adding animations and interactions"
          ]
        }
  ],
  AdvancedConcepts :[
    {
          id: 1,
          topic: "Usability Testing & Iteration",
          points: [
            "Usability testing methods (in-person, remote)","Gathering user feedback", "Iterative design cycles",
          ]
        },
        {
          id: 2,
          topic: "Accessibility in UI/UX",
          points: [
            "WCAG guidelines", "Accessible design practices", "Tools for testing accessibility"
          ]
        },
        {
          id: 3,
          topic: "UX Writing & Microcopy",
          points: [
            "Role of UX writing","Writing clear microcopy (CTAs, tooltips, error messages)","Brand tone and consistency"
          ]
        },
        {
          id: 4,
          topic: "Mobile & Responsive Design",
          points: [
            "Mobile-first principles","Responsive layouts","Designing for touch-based interactions"
          ]
        }
  ],
}

export const fullstack={
  SQLandDatabases:[
        {
          id: 1,
          topic: "Fundamentals",
          points: [
            "What is a database? ", "RDBMS concepts", "Data types, constraints, keys"
          ]
        },
        {
          id: 2,
          topic: "SQL Operations",
          points: [
            "DDL, DML, DQL", "SELECT, WHERE, GROUP BY ,ORDER BY", "Joins and subqueries", "Aggregate functions"
          ]
        },
        {
          id: 3,
          topic: "Advanced Topics",
          points: [
            "Transactions and ACID properties", "Indexing", "Query optimization"
          ]
        }
  ],
  CoreJava:[
     {
          id: 1,
          topic: "Java Basics",
          points: [
            "Variables, data types", "Loops and control statements", "Arrays and strings"
          ]
        },
        {
          id: 2,
          topic: "OOP Concepts",
          points: [
            "Classes and objects", "Inheritance and polymorphism", "Interfaces and encapsulation"
          ]
        },
        {
          id: 3,
          topic: "Essentials",
          points: [
            "Exception handling", "Multi-threading", "File I/O"
          ]
        },
        {
          id: 4,
          topic: "Serialization",
          points: [
            "Save and restore object state with serialization/deserialization"
          ]
        }
  ],
  DataStructuresAndAlgorithms:[
    {
          id: 1,
          topic: "Core Structures",
          points: [
            "Arrays", "Linked Lists", "Stacks & Queues","Trees & HashMaps"
          ]
        },
        {
          id: 2,
          topic: "Algorithms",
          points: [
            "Searching & sorting", "Recursion", "Greedy algorithms", "Dynamic programming"
          ]
        },
        {
          id: 3,
          topic: "Use Cases",
          points: [
            "Applying DSA in backend dev scenarios: caching, routing, etc"
          ]
        }
  ],
  AdvancedJava:[
    {
          id: 1,
          topic: "J2EE",
          points: [
            "Servlets and JSP", "JDBC", "Session management"
          ]
        },
        {
          id: 2,
          topic: "Hibernate",
          points: [
            "ORM basics", "Entity relationships", "HQL and caching"
          ]
        },
        {
          id: 3,
          topic: "Spring Framework",
          points: [
            "Spring Boot basics","REST API creation","Pagination, sorting","Basic security setup"
          ]
        }
  ],
  WebDevelopmentBasics :[
        {
          id: 1,
          topic: "Introduction",
          points: [
            "What is Web Development?", "Types of websites", "Tools you'll need"
          ]
        },
        {
          id: 2,
          topic: "HTML",
          points: [
            "Page structure", "Elements & attributes", "Forms & tables", "Semantic tags"
          ]
        },
        {
          id: 3,
          topic: "CSS",
          points: [
            "Selectors & properties", "Box model", "Flexbox & Grid","Media queries","SASS basics"
          ]
        },
        {
          id: 4,
          topic: "JavaScript Basics",
          points: [
            "Variables & types", "Operators", "Functions","DOM manipulation","ES6 features"
          ]
        }
  ],
  AdvancedJavascript :[
     {
          id: 1,
          topic: "Async Programming",
          points: [
            "Callbacks", "Promises", "async/await","Fetch API"
          ]
        },
        {
          id: 2,
          topic: "Modern JS",
          points: [
            "Destructuring", "Spread/Rest", "Classes & modules"
          ]
        },
        {
          id: 3,
          topic: "Debugging",
          points: [
            "try...catch", "Browser tools"
          ]
        },
        {
          id: 4,
          topic: "Mini Project",
          points: [
            "Build interactive forms & modals"
          ]
        }
  ],
  VersionControlAndTools :[
    {
          id: 1,
          topic: "Git & GitHub",
          points: [
            "Repositories", "Branches", "Commits","Pull requests"
          ]
        },
        {
          id: 2,
          topic: "Package Managers",
          points: [
            "npm & yarn basics"
          ]
        },
        {
          id: 3,
          topic: "Bundlers",
          points: [
            "Webpack or Vite basics"
          ]
        }
  ],
  ReactJs:[
    {
          id: 1,
          topic: "Core Concepts",
          points: [
            "Functional/class components","Props & state", "JSX", "Lifecycle methods"
          ]
        },
        {
          id: 2,
          topic: "Advanced Concepts",
          points: [
            "Hooks: useState,useEffect useContext", "React Router", "Context API","Redux (intro)"
          ]
        },
        {
          id: 3,
          topic: "Capstone Project",
          points: [
            "Build a dynamic React-based site with modals & forms"
          ]
        }
  ]
}