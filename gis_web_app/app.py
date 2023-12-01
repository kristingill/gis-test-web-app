from fastapi import FastAPI
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles

app = FastAPI()

app.mount("/static", StaticFiles(directory="static"), name="static")

@app.get("/api/v1/geodata/static/index.html", response_class=HTMLResponse)
def read_root():
    return """ 
    """