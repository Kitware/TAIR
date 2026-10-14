---
layout: home
title: TAIR
description: Toolkit for Autonomous Interventions and Robotics

# ==================================================
# HERO
# Button styles: primary or outline
# Remix Icon names: https://remixicon.com/
# ==================================================
hero:
  background_image: "/assets/images/tair-hero-medical.png"
  headline: "TAIR: Toolkit for Autonomous Interventions and Robotics"
  text: >-
    TAIR combines comprehensive open-access datasets and anatomical models with an open-source testbed. Use these resources to test, train, and evaluate autonomous robotic stroke intervention technologies for research and commercial applications.

# ==================================================
# CLINICAL DATA
# Replace placeholder URLs and verify release details before launch.
# ==================================================
clinical_data:
  subheadline: Clinical data sets
  headline: Clinical data for stroke intervention research and development
  text: >-
    The TAIR database includes vascular imaging data that represents the critical imaging modalities essential for neurovascular procedures. These modalities are used to visualize the vascular anatomy, identify pathology, and guide procedures. These targeted datasets support workflows connected with the TAIR testbed, and also support community-wide clinical and diagnostic research. A flexible permissive license allows use in academic, government, and commercial applications.
  datasets:
    - category: CTA / MRA
      title: CTA & MRA imaging
      text: >-
        A large-scale multi-center compilation of Computed Tomography Angiography (CTA) and Magnetic Resonance Angiography (MRA). All data were collected as part of routine critical care. Prior to release, all data were rigorously de-identified through removal of PHI from the image metadata. Defacing algorithms were applied to remove potentially identifying facial structures.
      details:
        - label: Current release (12.34.2027)
          value: 500 studies
        - label: Final release (12.34.2027)
          value: 2,000 studies
        - label: Format
          value: DICOM
    - category: Flouroscopy
      title: X-Ray Flouroscopy Video
      text: >-
        Videos of X-ray fluoroscopy procedures collected from a multi-center study during interventional procedures. Fluoroscopic videos are paired with CTA/MRA imaging from the CTA/MRA database for multi-modality research and development use cases. Prior to release, all data were rigorously de-identified through removal of PHI from the image metadata. Algorithms were applied to remove potentially identifying facial structures and burned in text.
      details:
        - label: Current release (12.34.2027)
          value: 125–250 datasets
        - label: Final release (12.34.2027)
          value: 1,250 datasets
        - label: Format
          value: DICOM cine + JSON metadata
  download:
    label: Download the data
    url: "#"
    icon: ri-download-line
  license:
    headline: License
    items:
      - label: Data license
        value: Creative Commons Attribution 4.0 International (CC BY 4.0)
      - label: Data citation
        value: <url>
  citation:
    label: Cite the dataset
    copy_label: Copy
    copy_success: Copied!
    code: |
      @dataset{tair2026,
        title  = {TAIR: Testbed for Autonomous Interventions and Robotics -- Neurovascular Data Release},
        author = {Kitware, Inc. and UNC Chapel Hill and Johns Hopkins University and University of Pittsburgh},
        year   = {2026},
        publisher = {ARPA-H AIR Program},
        license = {CC BY 4.0}
      }
  model:
    subheadline: 03 – Anatomical Models
    headline: Segmented, centerlined, and annotated models, as well as statistical-shape models
    text: >-
      This database includes 100 segmented, centerlined, and annotated CTA/MRA datasets, 50 annotated video fluoroscopy datasets, and XX models generated from population statistics and shape-modeling techniques.
    button:
      label: View on GitLab
      url: "https://gitlab.com/"
      icon: ri-gitlab-fill
    details:
      - label: Release
        value: 100 models + 1 population SSM
      - label: Geometry
        value: 2,000 models + multi-parameter SSMs
      - label: Formats
        value: VTK · NIfTI · OpenUSD · JSON graphs
      - label: Derivatives
        value: Meshes, centerlines, SSM coefficients
      - label: License
        value: Creative Commons Attribution 4.0 International License (CC BY 4.0)

# ==================================================
# TESTBED SIMULATOR
# ==================================================
testbed:
  subheadline: TAIR simulator
  headline: Training and evaluation for stroke intervention simulations
  text: >-
    Use the TAIR testbed to simulate stroke interventions across a range of patient anatomies and pathologies. The physics-based simulator represents soft-tissue mechanics, fluid dynamics, robot kinematics, and X-ray fluoroscopy. Replacement suggestion: An open interface connects robotic systems to the testbed for testing, training, and performance evaluation using FDA-defined metrics.
  callout:
    text: Access the open-source TAIR testbed and supporting resources.
    label: View on GitLab
    url: "https://gitlab.com/"
    icon: ri-gitlab-fill
    note: First open-source release is scheduled for March 2027
  phases:
    - number: Offline
      title: Data preparation
      items:
        - Download and organize clinical imaging
        - Segment anatomy and prepare models
        - Select scenarios and intervention targets
    - number: Real-Time
      title: Simulation
      items:
        - Configure anatomy, devices, and conditions
        - Run intervention and navigation scenarios
        - Capture repeatable trial data
    - number: Offline
      title: Evaluation and analysis
      items:
        - Measure performance and outcomes
        - Review intervention efficiency and safety
        - Compare methods across scenarios
  platforms_headline: Built on proven open-source platforms
  platforms_text: >-
    Rather than a bespoke one-off simulator, TAIR extends toolkits the team already develops and maintains — and contributes every improvement back upstream.
  platforms:
    - name: 3D Slicer · TubeTK
      url: "https://github.com/finetjul/TubeTK"
      new_tab: true
      text: Anatomical model segmentation and centerline extraction
    - name: Slicersalt
      url: "https://salt.slicer.org/"
      new_tab: true
      text: Statistical shape modeling of population-level vasculature
    - name: Pulse Physiology Engine
      url: "https://pulse.kitware.com/"
      new_tab: true
      text: Patient physiology and hemodynamic modeling
    - name: iMSTK
      url: "https://imstk.gitlab.io/index.html"
      new_tab: true
      text: Vessel, clot, and device mechanics; interactive multiphysics
    - name: OpenUSD
      url: "https://openusd.org/"
      new_tab: true
      text: Scene composition — the patient-specific digital twin
    - name: VTK · ITK
      url: "https://vtk.org/"
      new_tab: true
      text: Registration, scene graph assembly, and visualization
    - name: DeepDRR · ASTRA
      url: "https://github.com/arcadelab/deepdrr"
      new_tab: true
      text: Physics-based X-ray image formation and reconstruction
    - name: NVIDIA Isaac Sim · ROS 2
      url: "https://developer.nvidia.com/isaac/sim"
      new_tab: true
      text: Robot digital twin, two-way interface, HITL testing
    - name: NVIDIA Isaac for Healthcare
      url: "https://developer.nvidia.com/isaac/healthcare"
      new_tab: true
      text: The three-computer solution for healthcare robotics
---
