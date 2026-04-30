from __future__ import annotations

import json
from datetime import datetime, timezone
from pathlib import Path

from flask import Flask, jsonify, request, send_from_directory


ROOT = Path(__file__).resolve().parent
DIST = ROOT / "dist"
LEADS_FILE = ROOT / "data" / "leads.jsonl"


def create_app() -> Flask:
    app = Flask(__name__, static_folder=str(DIST), static_url_path="")

    @app.get("/api/health")
    def health():
        return jsonify({"status": "ok", "service": "volvo-site"})

    @app.get("/api/cars")
    def cars():
        return jsonify(
            [
                {"id": "ex30", "name": "Volvo EX30", "type": "electric"},
                {"id": "xc60", "name": "Volvo XC60", "type": "suv"},
                {"id": "xc90", "name": "Volvo XC90", "type": "flagship"},
                {"id": "s90", "name": "Volvo S90", "type": "sedan"},
            ]
        )

    @app.post("/api/leads")
    def leads():
        payload = request.get_json(silent=True) or {}
        name = str(payload.get("name", "")).strip()
        phone = str(payload.get("phone", "")).strip()
        interest = str(payload.get("interest", "")).strip() or "Подбор автомобиля"

        if not name or not phone:
            return jsonify({"error": "name and phone are required"}), 400

        lead = {
            "name": name,
            "phone": phone,
            "interest": interest,
            "created_at": datetime.now(timezone.utc).isoformat(),
        }

        LEADS_FILE.parent.mkdir(exist_ok=True)
        with LEADS_FILE.open("a", encoding="utf-8") as file:
            file.write(json.dumps(lead, ensure_ascii=False) + "\n")

        return jsonify({"ok": True, "lead": lead}), 201

    @app.get("/")
    def index():
        return send_from_directory(DIST, "index.html")

    @app.get("/<path:path>")
    def spa(path: str):
        target = DIST / path
        if target.exists() and target.is_file():
            return send_from_directory(DIST, path)
        return send_from_directory(DIST, "index.html")

    return app


app = create_app()


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000, debug=True)
