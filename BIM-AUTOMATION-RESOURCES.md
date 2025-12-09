# BIM Automation Resources

A curated collection of resources for automating Building Information Modeling (BIM) management.

---

## Overview

The BIM industry is estimated at ~$8.72 billion in 2024 and expected to reach $16.72 billion by 2029. AI and automation are transforming BIM workflows, enabling automated clash detection, quantity takeoffs, model generation, and documentation.

---

## Commercial BIM Automation Tools

### Autodesk Revit
- Industry-standard BIM software for architectural, structural, and MEP-F design
- Parametric design with automatic updates and coordination
- Documentation generation automation
- [Autodesk BIM Solutions](https://www.autodesk.com/solutions/aec/bim)

### Dynamo (Visual Programming for Revit)
- Visual programming to create complex scripts without code
- Automate repetitive tasks in BIM workflows
- Parametric design and data management
- Connects with other tools and data sources

### Solibri
- Quality control and clash detection
- Model validation against standards and regulations
- [Revizto BIM Automation Guide](https://revizto.com/en/what-is-bim-automation/)

### MagiCAD
- MEP-F (Mechanical, Electrical, Plumbing) system design
- Integration with Revit

---

## NVIDIA Omniverse (AEC & BIM)

NVIDIA Omniverse is a platform built on OpenUSD (Universal Scene Description) for real-time collaboration and visualization in AEC workflows.

### Key Features
- **OpenUSD Foundation** - Open-source 3D scene description (originally by Pixar)
- **Real-time Collaboration** - Multiple users working across Revit, Rhino, Grasshopper, Unreal Engine simultaneously
- **Omniverse Nucleus** - Collaboration engine for storing, sharing, and live collaboration on USD data
- **AI-Powered Automation** - Automates repetitive BIM tasks, accelerates physics analysis

### Omniverse Farm (Automation)
Automate batch operations including:
- Batch file conversion
- Asset naming convention validation
- Asset preview generation
- Physics simulation
- Fluid cache baking
- USD scene generation for ML training
- BIM data export as USD layers

### AEC Connectors
- Vectorworks Omniverse Connector for BIM workflows
- Revit, Rhino, Grasshopper, Unreal Engine integration
- Kohn Pedersen Fox (KPF) uses it for cross-tool collaboration

### Future: IFC + USD
- Multi-year plan to support BIM schemas (IFC) on top of USD
- Hexagon Reality Cloud Studio: AI scan-to-BIM with IFC/OpenUSD output

### Resources
- [NVIDIA Omniverse for AEC](https://www.nvidia.com/en-us/omniverse/architecture-engineering-construction/)
- [Optimizing BIM Workflows with USD](https://developer.nvidia.com/blog/optimizing-bim-workflows-using-usd-at-every-design-phase/)
- [Omniverse Farm Documentation](https://docs.omniverse.nvidia.com/farm/latest/overview.html)
- [AEC Magazine - Omniverse for AEC](https://aecmag.com/visualisation/nvidia-opens-up-omniverse-to-aec/)

---

## Autodesk Construction Cloud (ACC) Automation

### ACC APIs (Autodesk Platform Services)
REST APIs to access and automate:
- Project data and files
- Issues management
- Asset tracking
- Workflow automation
- Document management
- ERP system integration
- Custom reporting

### Recent Features (2024-2025)
- **March 2025**: 30+ releases including Automated Drawing Extraction and AI-powered Autodesk Assistant
- **January 2025**: 45+ releases with new Handover tool in Autodesk Docs/Build
- **November 2024**: 40+ releases with native dashboards, markup stamps, extractions

### ACC Python SDK
```bash
pip install acc-sdk
```
- Community-driven Python SDK for ACC API
- Automate project setup, user management, bulk updates
- Used to automate 3,000+ BIM 360/ACC projects at SSOE Group
- [GitHub: acc_sdk](https://github.com/realdanielbyrne/acc_sdk)

### ACC Connect (No-Code/Low-Code)
- Connect ACC with 200+ business systems
- Custom integrations without coding
- [NTI - ACC Connect Guide](https://www.nti-group.com/uk/blog/uk/2025/how-acc-connect-supercharges-autodesk-construction-cloud/)

### Ideate Automation
- Integrates with ACC via Autodesk Platform Services
- Free Ideate Cloud Connector for Revit + ACC
- Run BIM tasks in background
- [Ideate Automation](https://ideatesoftware.com/ideate-automation-integrates-seamlessly-with-acc)

### Resources
- [ACC APIs Overview](https://aps.autodesk.com/autodesk-construction-cloud-apis-integrations)
- [ACC API Reference](https://aps.autodesk.com/en/docs/acc/v1/reference)
- [Autodesk University - ACC Admin Automation](https://www.autodesk.com/autodesk-university/class/Automating-Autodesk-Construction-Cloud-Admin-Closing-the-Gap-Between-What-We-Have-and-What-We-Need-2023)

---

## Speckle (Open Source Data Platform)

Speckle is an open-source digital infrastructure for 3D data connectivity, collaboration, versioning, and automation in AEC.

### SpecklePy - Python SDK
```bash
pip install specklepy
```

**Features:**
- Object-based data exchange (no file exports/imports)
- GraphQL API client for full Speckle Server access
- Extensible object model (inherit from `Base` class)
- Multiple transports: SQLite, in-memory, Speckle Server
- Rich geometry primitives: Point, Line, Mesh, Brep, etc.
- Requires Python 3.10+

### Speckle Automate
- Full CI/CD pipelines on your Speckle data
- Automated QA/QC checks
- Process AEC data, run analyses, generate reports
- Connect to internal tools, databases, third-party services
- Webhooks for real-time automation triggers

### Software Connectors
Plugins for: Revit, Rhino, Grasshopper, AutoCAD, Civil 3D, Excel, Unreal Engine, Unity, QGIS, Blender, ArchiCAD, and more.

### Key Capabilities
- **Data Connectivity** - Get CAD/BIM models into other software without file exchange
- **Real-time Updates** - Live notifications and sync
- **Version Control** - Git-like versioning for 3D data
- **GraphQL API** - Programmatic access to all data

### Resources
- [SpecklePy Documentation](https://docs.speckle.systems/developers/sdks/python/introduction)
- [GitHub: specklepy](https://github.com/specklesystems/specklepy)
- [Speckle GitHub Organization](https://github.com/specklesystems)
- [Build with Speckle](https://speckle.systems/build-with-speckle/)
- [OSArch Wiki - Speckle](https://wiki.osarch.org/index.php?title=Speckle)

---

## Rhino 3D & Grasshopper Ecosystem

### Rhino 3D

Rhino (Rhinoceros 3D) is a powerful NURBS-based 3D modeling tool widely used in architecture, industrial design, and AEC.

**Scripting & Automation:**
- **Python 3 (CPython)** - Full support in Rhino 8 with NumPy and PyPI packages
- **RhinoCommon SDK** - Complete .NET API for geometry operations
- **RhinoScriptSyntax** - Hundreds of easy-to-use Python functions
- **Unified Script Editor** - Debug in both Rhino and Grasshopper (Windows/macOS)

**Client Libraries:**
- `compute_rhino3d` - Python client for Rhino Compute
- `rhino3dm.py` - Python library for reading/writing 3DM files

### Grasshopper (Visual Programming)

Grasshopper is Rhino's visual programming environment for parametric design.

**Automation Features:**
- Visual node-based scripting without code
- Automatic iteration on data lists
- Python/C# script components for custom logic
- GHPY compiler for creating reusable components
- Integration with external tools via Hops

**Key Integrations:**
- Direct connection to Rhino geometry
- VisualARQ BIM components
- Speckle connector for data sync
- ShapeDiver for cloud deployment

### Resources
- [Rhino API References](https://developer.rhino3d.com/api/)
- [Rhino Scripting Guide](https://www.rhino3d.com/features/developer/scripting/)
- [Python APIs for Rhino](https://developer.rhino3d.com/guides/rhinopython/apis-for-python/)
- [Rhino.Python Guides](https://developer.rhino3d.com/guides/rhinopython/)
- [McNeel Developer Guides](https://developer.rhino3d.com/guides/)

---

## Rhino Compute (Headless/Cloud)

Rhino Compute is an open-source REST API server for running Rhino and Grasshopper headless (without GUI).

### Core Capabilities
- **Stateless REST API** - Access RhinoCommon SDK over HTTP
- **Headless Grasshopper** - Solve definitions server-side
- **File Operations** - Read/write 3DM and other formats
- **Geometry Operations** - Create and manipulate curves, surfaces, solids

### Client Libraries
```bash
pip install compute-rhino3d  # Python client
```
- Python, C# (.NET), and JavaScript clients available
- Serialize operations via Grasshopper or Python scripts

### Deployment Options
- **Local Development** - Run on developer machine with Rhino 8
- **IIS Server** - Windows Server deployment with bootstrap script
- **Docker** - Containerized deployments for scalability

### Hops (Grasshopper Component)
- Call external Grasshopper definitions or Python functions
- Connect to local or remote Rhino Compute servers
- Enables distributed computation

### Licensing
- Core-hour billing for production use
- Free for local development/testing/prototyping
- [Compute Licensing Guide](https://developer.rhino3d.com/guides/compute/)

### Resources
- [Rhino Compute Official](https://www.rhino3d.com/compute)
- [GitHub: compute.rhino3d](https://github.com/mcneel/compute.rhino3d)
- [Compute Developer Guides](https://developer.rhino3d.com/guides/compute/)
- [App Server for Grasshopper](https://github.com/mcneel/compute.rhino3d.appserver)

---

## VisualARQ (BIM for Rhino)

VisualARQ is a BIM plugin that brings architectural modeling and documentation to Rhino.

### Key Features
- **Parametric BIM Objects** - Walls, curtain walls, beams, columns, stairs, openings
- **Automatic Documentation** - Plans, sections, elevations generated from 3D model
- **Quantification** - Surfaces, dimensions, components, quantities
- **Style System** - Customizable object styles with parametric properties

### Automation & Scripting
- **Grasshopper Components** - Create/modify VisualARQ objects via visual programming
- **VisualARQ API** - Programmatic access for automation
- **RhinoScript Integration** - Automate repetitive modeling tasks

### IFC Interoperability
- Built-in IFC import/export plugin
- Supports IFC 2x3 and IFC4
- Exchange with Revit, ArchiCAD, and other AEC software

### Documentation Automation
- Section & Plan Generator - Automatic 2D drawings from 3D model
- Real-time sections with dynamic updates
- Rendered and interior views

### Resources
- [VisualARQ Official](https://www.visualarq.com/)
- [VisualARQ on Food4Rhino](https://www.food4rhino.com/en/app/visualarq)
- [SimplyRhino - VisualARQ Guide](https://simplyrhino.co.uk/3d-modelling-software/visualarq)

---

## ShapeDiver (Grasshopper Cloud Platform)

ShapeDiver is a cloud platform that turns Grasshopper definitions into scalable web applications and APIs.

### How It Works
1. Upload Grasshopper definition to ShapeDiver
2. Platform exposes inputs/outputs via REST API
3. Access via web viewer, custom apps, or API calls
4. Automatic scaling, caching, and load balancing

### Key Features
- **RESTful API** - Access Grasshopper models without the viewer
- **SDKs** - Integrate into custom applications
- **3D Viewer** - Embeddable WebGL viewer for any website
- **Backend Infrastructure** - Servers running Rhino + Grasshopper in the cloud

### Use Cases
- **Product Configurators** - Interactive 3D customization
- **Design Automation** - Parametric design as a service
- **Manufacturing Integration** - Scan-to-print workflows
- **Internal Tools** - Custom design applications

### Platform Stats
- 5,000+ registered users
- 95+ countries
- Enterprise-grade reliability

### ShapeDiver vs Rhino Compute
| Feature | ShapeDiver | Rhino Compute |
|---------|------------|---------------|
| Hosting | Managed cloud | Self-hosted |
| Setup | Upload & go | Server configuration |
| Scaling | Automatic | Manual |
| Viewer | Included | Build your own |
| Pricing | Subscription | Core-hour billing |

### Resources
- [ShapeDiver Official](https://shapediver.com/)
- [What is ShapeDiver?](https://help.shapediver.com/doc/what-is-shapediver)
- [How It Works](https://www.shapediver.com/how-it-works)
- [ShapeDiver vs Rhino Compute](https://shapediver.com/blog/shapediver-rhino-compute-explained)

---

## AI-Powered Design Tools

### Hypar

Hypar is a cloud-based generative design platform for AEC, founded by the creators of Dynamo and former Revit product leads.

**Key Features:**
- **Generative Design** - Create hundreds of design options using algorithms
- **Cloud-Based** - Runs on microservices, no desktop installation needed
- **BIM Integration** - Export to Revit, Rhino, IFC, OBJ, glTF
- **API & SDKs** - Python and C# for custom function development

**Hypar 2.0 (2024-2025):**
- AI-powered layout suggestions
- Automatic mass, structural grid, and column generation
- Space planning focus with intuitive UI
- Text-to-BIM capabilities

**Pricing:**
- Free tier for individuals/students
- Pro tier for professionals
- Enterprise for custom deployment

```bash
pip install hypar  # Python SDK
```

**Resources:**
- [Hypar.io](https://hypar.io/)
- [Hypar on PyPI](https://pypi.org/project/hypar/)
- [AEC Magazine - Hypar 2.0](https://aecmag.com/features/hypar-2-0/)

### TestFit

TestFit is an AI-powered real estate feasibility platform for rapid site planning and building optimization.

**Core Capabilities:**
- **Site Solver** - Generate site plans instantly with AI
- **Real-Time Feasibility** - Unit yield, parking ratios, GFA analysis
- **Cost Estimation** - Automatic cost breakdowns
- **Generative Design** - Explore multiple layouts automatically

**Productivity Gains:**
- Site planning: 2 weeks → 2 days
- 2-3x more design alternatives on fixed budget
- 10-15% margin accuracy in 30-60 minutes
- 650+ deals evaluated weekly on platform

**Supported Project Types:**
- Multi-Family, Single-Family
- Industrial, Hotel, Retail
- Parking structures

**Export Options:**
- Revit, SketchUp, AutoCAD (.dxf), Excel (.csv)

**Resources:**
- [TestFit.io](https://www.testfit.io/)
- [TestFit Site Solver](https://www.testfit.io/site-solver)
- [TestFit for Architects](https://www.testfit.io/roles/architects)

---

## Viktor (Python Engineering Apps)

Viktor is a low-code platform for building and sharing engineering web applications using Python.

### Key Features
- **Python-Based** - Use familiar libraries (NumPy, pandas, etc.)
- **Browser Apps** - No local installation for end users
- **AI App Builder** - Generate Python code from natural language
- **Integrations** - Excel, Grasshopper, Dynamo, Matplotlib, Plotly

### How It Works
1. Write Python code or use AI App Builder
2. Platform handles UI, authentication, file exchange
3. Deploy as browser-based app
4. Share with team - no coding required to use

### AEC Use Cases
- Structural calculations
- Model checks and validation
- Geometry processing
- Automated reporting
- Custom design tools

### Autodesk Integration
- Available on Autodesk App Store
- Works with ACC & BIM 360
- Autodesk Platform Services integration

### Resources
- [Viktor.ai](https://www.viktor.ai/)
- [Viktor GitHub](https://github.com/viktor-platform)
- [Python for Engineers - AEC Workflows](https://www.viktor.ai/blog/137/Python-for-engineers-automatin-AEC-workflows)
- [Viktor on Autodesk App Store](https://apps.autodesk.com/BIM360/en/Detail/Index?id=7289593180196221362)

---

## Unreal Engine & Twinmotion (Visualization)

Epic Games' real-time visualization tools for architectural visualization and design review.

### Twinmotion

Powered by Unreal Engine 5, Twinmotion is an intuitive real-time visualization tool for AEC.

**Key Features:**
- **Instant Sync** - Live connection with Revit, Rhino, SketchUp, ArchiCAD, and 10+ apps
- **1M+ Assets** - Built-in library of materials, vegetation, furniture
- **Nanite** - Handle massive polygon counts (added in 2025.2)
- **VR Support** - Immersive design review

**Supported Software:**
3ds Max, Allplan, ArchiCAD, BricsCAD, form•Z, Revit, Rhino, RIKCAD, SketchUp Pro, SOLIDWORKS, Vectorworks

### Datasmith

Open pipeline for bringing CAD/BIM data into Unreal Engine.

- **20+ CAD Formats** - Revit, Rhino, SketchUp, 3ds Max, etc.
- **Free** - Available to all users
- **Revit Exporter** - Now developed by Autodesk
- Alternative to FBX with better geometry handling

### Industry Adoption
Used by: Gensler, HOK, Populous, Foster+Partners, ARUP, Zaha Hadid Architects, and more.

### Workflow
1. Design in BIM software (Revit, Rhino, etc.)
2. Sync to Twinmotion via Direct Link
3. Apply materials, lighting, environment
4. Export images, videos, VR experiences
5. Optionally import to Unreal Engine for advanced features

### Resources
- [Twinmotion](https://www.twinmotion.com/)
- [Datasmith Plugins](https://www.unrealengine.com/en-US/datasmith/plugins)
- [Twinmotion to Unreal Importer](https://www.unrealengine.com/en-US/blog/twinmotion-to-unreal-engine-importer-bridging-architectural-worlds)
- [AEC Magazine - Unreal in AEC](https://aecmag.com/visualisation/an-epic-investment-unreal-engine-in-architecture-aec-twinmotion/)

---

## Open Source Tools & Libraries

### IfcOpenShell
- **The** open source IFC toolkit and geometry engine
- Supports IFC2X3, IFC4, IFC4X3
- Read/write IFC-SPF, IFCJSON, IFCXML, IFCHDF5, IFCSQL
- High-level API for clash detection, model comparison, cost calculation, 4D simulation
- Conversion to 10+ formats
- [IfcOpenShell Website](https://ifcopenshell.org/)

### BlenderBIM
- Free add-on for Blender based on IfcOpenShell
- Native IFC editing and generation
- Full BIM authoring capabilities in open source software
- [BlenderBIM via IfcOpenShell](https://ifcopenshell.org/)

### xBIM Toolkit
- .NET library for working with IFC files
- Built on open standards (IFC, BCF, IDS)
- Scalable APIs for BIM and Digital Twin applications
- [xBIM Website](https://xbim.net/)

### GeometryGymIFC
- Open source library for IFC2x3 and IFC4
- Supports ifcxml and ifcjson
- Available on NuGet
- [GeometryGymIFC on GitHub](https://github.com/GeometryGym/GeometryGymIFC)

### xeokit-bim-viewer
- JavaScript BIM/IFC viewer
- Supports IFC2x3 and IFC4
- Low-cost, high-performance web-based viewing
- Full JavaScript API
- [xeokit BIM Viewer](https://xeokit.github.io/xeokit-bim-viewer/)

---

## Blender Procedural Modeling

### Geometry Nodes

Blender's built-in procedural/parametric modeling system, similar to Grasshopper or Houdini.

**Architectural Applications:**
- **Facade Design** - Procedural patterns responding to sunlight, wind, orientation
- **Parametric Components** - Windows, doors, structural elements
- **Modular Systems** - Walls, panels, repeating elements
- **Rapid Iteration** - Adjust parameters, see instant results

**Key Benefits:**
- Non-destructive workflow
- Parametric control via sliders
- Automation of repetitive tasks
- Free and open-source

**Resources:**
- [Geometry Nodes from Scratch - Blender Studio](https://studio.blender.org/training/geometry-nodes-from-scratch/)
- [Blender 3D Architect - Parametric Architecture](https://www.blender3darchitect.com/modeling-for-architecture/parametric-architecture-with-geometry-nodes/)
- [PAACADEMY - Parametric Architecture with Blender](https://paacademy.com/course/parametric-architecture-with-blender)

### Sverchok

Sverchok is Blender's equivalent to Grasshopper - a visual programming addon for parametric architecture.

**Key Features:**
- **Visual Node Programming** - No coding required
- **Grasshopper-Like** - Familiar workflow for Rhino users
- **Advanced Nodes** - Profile parametric, Generative art, CSG Boolean, Bmesh operations
- **Python Access** - Use bpy API with Get/Set nodes
- **Export** - Multiple format support

**Comparison:**
Similar to Houdini VOP, Softimage ICE, Maya Point SOuP, but unique for parametric architectural design.

**Installation:**
Works with Blender 2.93+ (tested through 5.1). Install via Preferences > Add-ons.

**Resources:**
- [Sverchok Documentation](https://nortikin.github.io/sverchok/)
- [GitHub: Sverchok](https://github.com/nortikin/sverchok)
- [OSArch Wiki - Sverchok](https://wiki.osarch.org/index.php?title=Sverchok)

### Other Blender Architecture Add-ons
- **Sorcar** - Alternative parametric node system
- **Archipack** - Architectural modeling (walls, windows, doors)
- **Building Tools** - Quick building generation
- **Tissue** - Tessellation and advanced mesh manipulation

---

## Topologic / TopologicPy

Topologic is an open-source spatial modeling library for AEC using non-manifold topology (NMT).

### Overview
- **Spatial Topology** - Hierarchical and topological 3D representations
- **Building Intelligence** - Enriches BIM with topology and AI
- **Graph-Based** - Natural fit for Graph Machine Learning (GML)
- **Open Source** - AGPL v3.0 license

### Installation
```bash
pip install topologicpy
```
Requires Python 3.10+

### Core Capabilities
- **Defeaturing** - Simplify geometry for faster analysis
- **Encoded Meshing** - Maintain topological consistency
- **Spatial Analysis** - Building performance, energy, daylighting
- **Graph Representation** - Connect with AI/ML pipelines

### Data Formats
- IFC, OBJ, BREP, HBJSON, CSV
- Speckle integration for cloud sync

### Interfaces
- Command-line and Python scripts
- Visual data flow plugins (Grasshopper, Dynamo)
- Blender via TopologicSverchok
- Streamlit for web interfaces

### Authors
Developed by Cardiff University and UCL (Wassim Jabi, Robert Aish, et al.)

### Resources
- [Topologic.app](https://topologic.app/)
- [GitHub: topologicpy](https://github.com/wassimj/topologicpy)
- [Documentation](https://topologicpy.readthedocs.io/)
- [TopologicSverchok](https://github.com/wassimj/TopologicSverchok)

---

## APIs & Integration

### Revit API
- Design Automation API for Revit (DA4R) - cloud-based automation
- RevitLookup - debugging and exploration tool
- Direwolf - fast Revit data extraction
- Parallel task orchestration support
- [The Building Coder - Open Source Resources](https://thebuildingcoder.typepad.com/blog/open-source/)

### IFC Standards & Interoperability
- Industry Foundation Classes (IFC) - open BIM exchange standard
- buildingSMART - international standards organization
- [Autodesk BIM Interoperability](https://www.autodesk.com/solutions/aec/bim/interoperability)

### Data-Driven Construction (DDC)
- Excel Plugin for CAD to open data frame conversion
- Python + pandas integration for IFC data analysis
- AI interaction capabilities

---

## Emerging Technologies (2025 Trends)

### Digital Twins
- Virtual replicas of physical assets
- Real-time performance monitoring
- Operations and maintenance optimization
- Integration with BIM models

### AI in BIM
- Automated conflict detection
- Energy performance prediction
- Design optimization
- Project management automation

### BIM + GIS Integration
- Urban planning applications
- Environmental impact analysis
- Spatial analysis combined with precision modeling

---

## Community & Learning Resources

- **buildingSMART** - Open standards organization
- **OSArch Forum** - Free software and open source in architecture community
- **IFC.js Discord** - Community support for IFC.js
- [EPFL Open Source BIM](https://www.epfl.ch/schools/enac/cnpa-ifc/)
- [BIM Associates - Top BIM Software 2025](https://www.bimassociates.com/blog/top-bim-software-tools/)
- [G2 BIM Software Reviews](https://www.g2.com/categories/building-design-and-building-information-modeling-bim)

---

## Quick Start Recommendations

| Use Case | Recommended Tool |
|----------|------------------|
| Commercial BIM authoring | Autodesk Revit + Dynamo |
| Open source BIM authoring | BlenderBIM |
| IFC processing/automation | IfcOpenShell (Python) |
| .NET IFC development | xBIM Toolkit |
| Web-based IFC viewing | xeokit-bim-viewer |
| Cloud automation | Revit Design Automation API |
| Real-time visualization & collaboration | NVIDIA Omniverse |
| Construction project automation | Autodesk ACC + acc_sdk (Python) |
| Open source data connectivity | Speckle + SpecklePy |
| Cross-platform BIM data sync | Speckle Automate |
| No-code ACC integration | ACC Connect |
| Parametric 3D modeling | Rhino 3D + Grasshopper |
| Headless geometry server | Rhino Compute |
| BIM in Rhino | VisualARQ |
| Grasshopper cloud deployment | ShapeDiver |
| Custom product configurators | ShapeDiver + Grasshopper |
| AI generative design | Hypar |
| Real estate feasibility | TestFit |
| Python engineering web apps | Viktor |
| Architectural visualization | Twinmotion / Unreal Engine |
| Open source parametric (Blender) | Geometry Nodes + Sverchok |
| Spatial topology & AI | TopologicPy |

---

## Sources

### General BIM
- [Autodesk BIM Solutions](https://www.autodesk.com/solutions/aec/bim)
- [Revizto - What is BIM Automation](https://revizto.com/en/what-is-bim-automation/)
- [BIM Associates - Top BIM Software 2025](https://www.bimassociates.com/blog/top-bim-software-tools/)
- [The Building Coder - Open Source](https://thebuildingcoder.typepad.com/blog/open-source/)
- [Autodesk BIM Interoperability](https://www.autodesk.com/solutions/aec/bim/interoperability)
- [EPFL Open Source BIM](https://www.epfl.ch/schools/enac/cnpa-ifc/)

### Open Source Tools
- [IfcOpenShell](https://ifcopenshell.org/)
- [xBIM](https://xbim.net/)
- [xeokit BIM Viewer](https://xeokit.github.io/xeokit-bim-viewer/)

### NVIDIA Omniverse
- [NVIDIA Omniverse for AEC](https://www.nvidia.com/en-us/omniverse/architecture-engineering-construction/)
- [Optimizing BIM Workflows with USD](https://developer.nvidia.com/blog/optimizing-bim-workflows-using-usd-at-every-design-phase/)
- [Omniverse Farm Documentation](https://docs.omniverse.nvidia.com/farm/latest/overview.html)
- [AEC Magazine - Omniverse for AEC](https://aecmag.com/visualisation/nvidia-opens-up-omniverse-to-aec/)

### Autodesk Construction Cloud
- [ACC APIs Overview](https://aps.autodesk.com/autodesk-construction-cloud-apis-integrations)
- [ACC API Reference](https://aps.autodesk.com/en/docs/acc/v1/reference)
- [GitHub: acc_sdk (Python)](https://github.com/realdanielbyrne/acc_sdk)
- [Autodesk University - ACC Admin Automation](https://www.autodesk.com/autodesk-university/class/Automating-Autodesk-Construction-Cloud-Admin-Closing-the-Gap-Between-What-We-Have-and-What-We-Need-2023)
- [NTI - ACC Connect Guide](https://www.nti-group.com/uk/blog/uk/2025/how-acc-connect-supercharges-autodesk-construction-cloud/)

### Speckle
- [SpecklePy Documentation](https://docs.speckle.systems/developers/sdks/python/introduction)
- [GitHub: specklepy](https://github.com/specklesystems/specklepy)
- [Speckle GitHub Organization](https://github.com/specklesystems)
- [Build with Speckle](https://speckle.systems/build-with-speckle/)
- [OSArch Wiki - Speckle](https://wiki.osarch.org/index.php?title=Speckle)

### Rhino 3D & Grasshopper
- [Rhino API References](https://developer.rhino3d.com/api/)
- [Rhino Scripting Guide](https://www.rhino3d.com/features/developer/scripting/)
- [Python APIs for Rhino](https://developer.rhino3d.com/guides/rhinopython/apis-for-python/)
- [Rhino.Python Guides](https://developer.rhino3d.com/guides/rhinopython/)
- [McNeel Developer Guides](https://developer.rhino3d.com/guides/)

### Rhino Compute
- [Rhino Compute Official](https://www.rhino3d.com/compute)
- [GitHub: compute.rhino3d](https://github.com/mcneel/compute.rhino3d)
- [Compute Developer Guides](https://developer.rhino3d.com/guides/compute/)
- [App Server for Grasshopper](https://github.com/mcneel/compute.rhino3d.appserver)

### VisualARQ
- [VisualARQ Official](https://www.visualarq.com/)
- [VisualARQ on Food4Rhino](https://www.food4rhino.com/en/app/visualarq)

### ShapeDiver
- [ShapeDiver Official](https://shapediver.com/)
- [What is ShapeDiver?](https://help.shapediver.com/doc/what-is-shapediver)
- [How It Works](https://www.shapediver.com/how-it-works)
- [ShapeDiver vs Rhino Compute](https://shapediver.com/blog/shapediver-rhino-compute-explained)

### AI Design Tools
- [Hypar.io](https://hypar.io/)
- [Hypar on PyPI](https://pypi.org/project/hypar/)
- [AEC Magazine - Hypar 2.0](https://aecmag.com/features/hypar-2-0/)
- [TestFit.io](https://www.testfit.io/)
- [TestFit Site Solver](https://www.testfit.io/site-solver)

### Viktor
- [Viktor.ai](https://www.viktor.ai/)
- [Viktor GitHub](https://github.com/viktor-platform)
- [Python for Engineers - AEC Workflows](https://www.viktor.ai/blog/137/Python-for-engineers-automatin-AEC-workflows)

### Unreal Engine & Twinmotion
- [Twinmotion](https://www.twinmotion.com/)
- [Datasmith Plugins](https://www.unrealengine.com/en-US/datasmith/plugins)
- [AEC Magazine - Unreal in AEC](https://aecmag.com/visualisation/an-epic-investment-unreal-engine-in-architecture-aec-twinmotion/)

### Blender Procedural
- [Geometry Nodes - Blender Studio](https://studio.blender.org/training/geometry-nodes-from-scratch/)
- [Blender 3D Architect](https://www.blender3darchitect.com/modeling-for-architecture/parametric-architecture-with-geometry-nodes/)
- [Sverchok Documentation](https://nortikin.github.io/sverchok/)
- [GitHub: Sverchok](https://github.com/nortikin/sverchok)

### Topologic
- [Topologic.app](https://topologic.app/)
- [GitHub: topologicpy](https://github.com/wassimj/topologicpy)
- [TopologicPy Documentation](https://topologicpy.readthedocs.io/)
- [TopologicSverchok](https://github.com/wassimj/TopologicSverchok)
