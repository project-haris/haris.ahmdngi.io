# Deployment

Haris is designed to move from hardware bench to sealed vessel install through a repeatable process.

## Deployment Flow

1. Prepare the node.
2. Load vessel-specific configuration.
3. Run the automation playbooks.
4. Validate telemetry flow and harden the deployment.

## Prepare the Node

- Assemble the Raspberry Pi, PiCAN-M HAT, storage, and networking hardware
- Flash and harden the operating system
- Confirm local interfaces and device assumptions

## Load Vessel-Specific Configuration

- Set host variables
- Add Tailscale credentials
- Configure Signal K settings
- Capture vessel-specific deployment assumptions

## Run the Playbooks

```bash
ansible-playbook playbooks/group_vessel_edge/main.yml -D
ansible-playbook playbooks/group_msoc_core/main.yml -D
```

Use Watchtower to apply the Haris, Tailscale, ELK, Node-RED, and supporting system roles consistently.

## Validate and Harden

- Confirm telemetry flow from vessel edge to core services
- Verify tunnel reachability and service health
- Check log ingestion and dashboards
- Seal the enclosure only after the node behaves as expected
