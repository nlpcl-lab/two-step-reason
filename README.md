# Annotation quality control via two-step reason selection

This is the code of our paper ["Nonsense!: Quality Control via Two-Step Reason Selection for Annotating Local Acceptability and Related Attributes in News Editorials"](https://www.aclweb.org/anthology/D19-1293/) (EMNLP-IJCNLP 2019) 

The annotation tool that we used for testing the quality control method via two-step reason selection. 
The annotation guideline, acquired data, and code to reproduce the experimental results.

## Pre-requisites

1. Install and run [Mongodb](https://www.mongodb.com/).

## Setup 

1. To connect the Mongodb, make your own config.py: `cp config.sample.py config.py`
    - If the default setting of the Mongodb has not been changed, you don't need to modify the config.py
    
2. Install python requirements: `pip install -r requirements.txt`

## Usage

1. Run the web-based annotation tool: `python app.py`

## Citation
Please cite our paper:

```bibtex
@inproceedings{yang-etal-2019-nonsense,
    title = "Nonsense!: Quality Control via Two-Step Reason Selection for Annotating Local Acceptability and Related Attributes in News Editorials",
    author = "Yang, Wonsuk and yoon, seungwon and Carpenter, Ada and Park, Jong",
    booktitle = "Proceedings of the 2019 Conference on Empirical Methods in Natural Language Processing and the 9th International Joint Conference on Natural Language Processing (EMNLP-IJCNLP)",
    month = nov,
    year = "2019",
    address = "Hong Kong, China",
    publisher = "Association for Computational Linguistics",
    url = "https://www.aclweb.org/anthology/D19-1293",
    pages = "2947--2956",
}
```
