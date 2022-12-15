# Body By Darby Web
## Libraries & assets
- Developed using [React](https://reactjs.org/docs/create-a-new-react-app.html)
- [Minerva Font](https://eng.m.fontke.com/font/11589742/download/#google_vignette)
- SCSS
> To install SCSS, run:
```
npm install sass --save-dev
```

## To run application:
```
npm start
```

## To containerize and upload to AWS

#### 1. Authenticate (Only needed once)
```
aws ecr get-login-password --region us-west-1 | docker login --username AWS --password-stdin 489017049965.dkr.ecr.us-west-1.amazonaws.com
```

#### 2. Build container
```
docker build -t bodybydarbyweb .
```

#### 3. Tag Image
```
docker tag bodybydarbyweb:latest 489017049965.dkr.ecr.us-west-1.amazonaws.com/bodybydarbyweb:latest
```

### 4. Push to AWS
```
docker push 489017049965.dkr.ecr.us-west-1.amazonaws.com/bodybydarbyweb:latest
```