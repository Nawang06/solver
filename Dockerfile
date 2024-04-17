#Dockerfile for Solver application
FROM Python3.9_slim
COPY solver.py /app/
WORKDIR /app
CMD ["python", "solver.py"]