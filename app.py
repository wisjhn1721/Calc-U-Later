from flask import Flask, render_template, send_from_directory, url_for, redirect

app = Flask(__name__)


@app.route('/')
def home():
    return render_template('base.html')


if __name__ == '__main__':
    app.run()
