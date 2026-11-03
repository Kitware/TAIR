---
layout: dataset
header_mode: static
title: Clinical Data | TAIR
description: Clinical data for stroke intervention research and development.
permalink: /clinical-data/

dataset:
  subheadline: Clinical dataset
  headline: Multimodal Imaging Dataset for Cerebrovascular Disease
  text: >-
    The TAIR database includes vascular imaging data that represents the critical imaging modalities essential for neurovascular procedures. These modalities are used to visualize the vascular anatomy, identify pathology, and guide procedures. These targeted datasets support workflows connected with the TAIR testbed, and also support community-wide clinical and diagnostic research. A flexible permissive license allows use in academic, government, and commercial applications.

  tags:
    - stroke
    - CTA
    - MRA
    - x-ray fluoroscopy
    - NIfTI
    - segmentation
    - neurovascular

  download:
    label: Download
    info: 70 GB | .zip
    url: "https://multimodal-imaging-for-cerebrovascular-disease.s3.us-east-1.amazonaws.com/tair-project-data.zip"
    icon: ri-download-line

  advanced:
    steps:
      - text: Install the <a href="https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html">AWS CLI</a>.<br><em class="text-xs">No AWS account is required</em>.
      - text: Run the command below to download the data
    command: >-
      aws s3 cp s3://multimodal-imaging-for-cerebrovascular-disease/tair-project-data.zip . --no-sign-request
    note: Please ensure sufficient disk space when downloading.

  metadata:
    - label: Contact
      value: <a href="mailto:TAIRcontact@kitware.com">TAIRcontact@kitware.com</a>
    - label: Size
      value: 70 GB
    - label: Created
      value: November 13, 2026
    - label: Last update
      value: November 13, 2026
    - label: License
      value: CC BY 4.0

  sections:
    - category: CTA / MRA
      title: CTA & MRA imaging
      text: >-
        A large-scale multi-center compilation of Computed Tomography Angiography (CTA) and Magnetic Resonance Angiography (MRA). All data were collected as part of routine critical care. Prior to release, all data were rigorously de-identified through removal of PHI from the image metadata. Defacing algorithms were applied to remove potentially identifying facial structures.
      details:
        - label: Current release
          note: 11.3.2026
          value: 500 studies
        - label: Final release
          note: 12.30.2027
          value: 2,000 studies
        - label: Format
          value: NIfTI

    - category: Fluoroscopy
      title: X-Ray Fluoroscopy Video
      text: >-
        Videos of X-ray fluoroscopy procedures collected from a multi-center study during interventional procedures. Fluoroscopic videos are paired with CTA/MRA imaging from the CTA/MRA database for multi-modality research and development use cases. Prior to release, all data were rigorously de-identified through removal of PHI from the image metadata. Algorithms were applied to remove potentially identifying facial structures and burned-in text.
      details:
        - label: Current release
          note: 11.3.2026
          value: 150 datasets
        - label: Final release
          note: 12.30.2027
          value: 1,250 datasets
        - label: Format
          value: MP4

    - category: Anatomical models
      title: Segmented, centerlined, and annotated models, as well as statistical-shape models
      text: >-
        This database includes 100 segmented, centerlined, and annotated CTA/MRA datasets, 50 annotated video fluoroscopy datasets, and models generated from population statistics and shape-modeling techniques.
      #button:
      #  label: View source code on GitLab
      #  url: "https://gitlab.com/"
      #  icon: ri-gitlab-fill
      #  new_tab: true
      details:
        - label: Release 1
          value: 100 models + 1 population SSM
        - label: Final release
          value: 2,000 models + multi-parameter SSMs
        - label: Formats
          value: VTK · NIfTI · OpenUSD · JSON graphs
        - label: Derivatives
          value: Meshes, centerlines, SSM coefficients
      coming_soon: yes

  citation:
    label: Cite the dataset
    code: |
      @dataset{tair2026,
        author    = {Lee, Yueh Z. and de Siqueira Bucci, Ana C. and Ho, James and Paniagua, Beatriz and Vicory, Jared and Ravikumar, Sadhana and Nagler, Mike and Webb, Jeffrey B. and Clipp, Rachel B.},
        title     = {{TAIR}: Multimodal Imaging Dataset
                    for Cerebrovascular Disease},
        year      = {2026},
        version   = {1.0},
        publisher = {AWS Registry of Open Data},
        url       = {https://tair.kitware.com/clinical-data},
      }

  contributors:
    - Kitware, Inc.
    - University of North Carolina at Chapel Hill
---
