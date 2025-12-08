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
