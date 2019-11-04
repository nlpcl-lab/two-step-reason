# Annotation quality control via two-step reason selection

An implementation of paper "Nonsense!: Quality Control via Two-Step Reason Selection for Annotating Local Acceptability and Related Attributes in News Editorials" (EMNLP-IJCNLP 2019)

The annotation tool that we used for testing the quality control method via two-step reason selection. 
The annotation guideline, acquired data, and code to reproduce the experimental results.

## Pre-requisites

1. Install and run [Mongodb](https://www.mongodb.com/).

## Setup 

1. To connect the Mongodb, make your own config.py: `cp config.sample.py config.py`
    - If the default setting of the Mongodb has not been changed, you don't need to modify the config.py
    
2. Install python requirements: `pip install -r requirements.txt`


## Citation
When you use this tool, please cite our paper:

```bibtex
@inproceedings{yang-2019-Nonsense,
    title = "Nonsense!: Quality Control via Two-Step Reason Selection for Annotating Local Acceptability and Related Attributes in News Editorials",
    author = "Yang, Wonsuk and Yoon, Seungwon and Carpenter, Ada and Park, Jong C.",
    booktitle = "Proceedings of the 2019 Conference on Empirical Methods in Natural Language Processing and 9th International Joint Conference on Natural Language Processing",
    year = "2019"
}
```
