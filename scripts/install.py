#!/usr/bin/env python3
"""Copy this self-contained skill to a local Agent skills folder, without overwriting."""
import argparse
import shutil
from pathlib import Path


def main():
    parser = argparse.ArgumentParser(description='Install ReplicaFlow to a local Agent skills folder.')
    parser.add_argument('--target', type=Path, help='Exact destination skill folder. Default: ~/.agents/skills/replica-flow')
    args = parser.parse_args()
    source = Path(__file__).resolve().parents[1]
    target = (args.target or Path.home() / '.agents' / 'skills' / 'replica-flow').expanduser().resolve()
    if target == source or source in target.parents:
        parser.error('The destination must be outside this downloaded package.')
    if target.exists():
        parser.error(f'Destination already exists: {target}. Review or back up that folder before updating.')
    if not (source / 'SKILL.md').is_file():
        parser.error('SKILL.md is missing. Download the complete package.')
    target.parent.mkdir(parents=True, exist_ok=True)
    shutil.copytree(source, target, ignore=shutil.ignore_patterns('.git', '.DS_Store', '__pycache__', '*.pyc', '.env', '.env.*'))
    print(f'Installed ReplicaFlow: {target}')
    print('Open your Agent and invoke $replica-flow. If it is not listed, restart the Agent.')


if __name__ == '__main__':
    main()
