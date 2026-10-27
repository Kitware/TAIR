---
layout: dataset
header_mode: static
title: Clinical Data | TAIR
description: Clinical data for stroke intervention research and development.
permalink: /clinical-data/

dataset:
  subheadline: Clinical data set
  headline: Multimodal Imaging Dataset for Cerebrovascular Disease
  text: >-
    The TAIR database includes vascular imaging data that represents the critical imaging modalities essential for neurovascular procedures. These modalities are used to visualize the vascular anatomy, identify pathology, and guide procedures. These targeted datasets support workflows connected with the TAIR testbed, and also support community-wide clinical and diagnostic research. A flexible permissive license allows use in academic, government, and commercial applications.

  tags:
    - stroke
    - CTA
    - MRA
    - x-ray fluoroscopy
    - DICOM
    - segmentation
    - neurovascular

  download:
    label: Download the data
    url: "#"
    icon: ri-download-line

  metadata:
    - label: ID
      value: TAIR-CLIN-001
    - label: Contact
      value: TAIR Data Team
    - label: Size
      value: 4.2 TB
    - label: Studies
      value: 1,110
    - label: Created
      value: March 4, 2026
    - label: Last update
      value: September 22, 2026
    - label: License
      value: CC BY 4.0
    - label: Access
      value: Open Access

  sections:
    - category: CTA / MRA
      title: CTA & MRA imaging
      text: >-
        A large-scale multi-center compilation of Computed Tomography Angiography (CTA) and Magnetic Resonance Angiography (MRA). All data were collected as part of routine critical care. Prior to release, all data were rigorously de-identified through removal of PHI from the image metadata. Defacing algorithms were applied to remove potentially identifying facial structures.
      details:
        - label: Current release
          note: 12.34.2027
          value: 500 studies
        - label: Final release
          note: 12.34.2027
          value: 2,000 studies
        - label: Format
          value: DICOM

    - category: Fluoroscopy
      title: X-Ray Fluoroscopy Video
      text: >-
        Videos of X-ray fluoroscopy procedures collected from a multi-center study during interventional procedures. Fluoroscopic videos are paired with CTA/MRA imaging from the CTA/MRA database for multi-modality research and development use cases. Prior to release, all data were rigorously de-identified through removal of PHI from the image metadata. Algorithms were applied to remove potentially identifying facial structures and burned-in text.
      details:
        - label: Current release
          note: 12.34.2027
          value: 125–250 datasets
        - label: Final release
          note: 12.34.2027
          value: 1,250 datasets
        - label: Formats
          value: DICOM cine + JSON metadata

    - category: Anatomical models
      title: Segmented, centerlined, and annotated models, as well as statistical-shape models
      text: >-
        This database includes 100 segmented, centerlined, and annotated CTA/MRA datasets, 50 annotated video fluoroscopy datasets, and models generated from population statistics and shape-modeling techniques.
      button:
        label: View source code on GitLab
        url: "https://gitlab.com/"
        icon: ri-gitlab-fill
        new_tab: true
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
    copy_label: Copy
    copy_success: Copied!
    code: |
      @dataset{tair2026,
        title     = {TAIR: Testbed for Autonomous Interventions and Robotics -- Neurovascular Data Release},
        author    = {Kitware, Inc. and UNC Chapel Hill and Johns Hopkins University and University of Pittsburgh},
        year      = {2026},
        publisher = {ARPA-H AIR Program},
        license   = {CC BY 4.0}
      }

  contributors:
    - Kitware, Inc.
    - University of North Carolina at Chapel Hill
    - University of Pittsburgh Medical Center
---
