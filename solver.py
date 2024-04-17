# Setup for saving to hub
import os
os.environ["DEV"] = "1"

# Import necessary libraries
import json
import neurodiffeq
import numpy as np
import matplotlib.pyplot as plt
from neurodiffeq import diff
from neurodiffeq.solvers import Solver1D, Solver2D
from neurodiffeq.conditions import IVP, DirichletBVP2D
from neurodiffeq.networks import FCNN, SinActv

from cycler import cycler
import matplotlib.pyplot as plt
large = 24; medium = 20; small = 16
params = {'axes.titlesize': medium,
          'legend.fontsize': small,
          'figure.figsize': (8, 8),
          'axes.labelsize': small,
          'axes.linewidth': 2,
          'xtick.labelsize': small,
          'xtick.color' : '#1D1717',
          'ytick.color' : '#1D1717',
          'ytick.labelsize': small,
          'axes.edgecolor':'#1D1717',
          'figure.titlesize': medium,
          'axes.prop_cycle': cycler(color = ['#66bb6a','#558ed5','#dd6a63','dcd0ff','#ffa726']),}
plt.rcParams.update(params)

def train_serverless(file):
    api_data = read_api(file)
    solver = generate_solver(api_data)
    results = train(solver)

def read_api(file):
    # Reading the JSON file.
    with open(file, 'r') as json_file:
        data = json.load(json_file)
    os.environ["NEURODIFF_API_KEY"] = '123'
    return data

def generate_solver(data):
    pass

def train():
    pass