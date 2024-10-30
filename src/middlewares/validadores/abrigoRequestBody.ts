import { NextFunction, Request, Response } from "express";
import * as yup from "yup";
import { TipoRequestBodyAbrigo } from "../../tipos/tiposAbrigo";
import { pt } from "yup-locale-pt";
import tratarErroValidacaoYup from "../../utils/trataValidacaoYup";

yup.setLocale(pt);

const esquemaBodyAbrigo: yup.ObjectSchema<Omit<TipoRequestBodyAbrigo, "endereco">> = yup.object({
    nome:yup.string().defined().required(),
    email:yup.string().defined().required(),
    senha:yup.string().defined().required().min(6).matches(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/gm, "senha inválida"),
    celular:yup.string().defined().matches(/^(\(?[0-9]{2}\)?)? ?([0-9]{4,5})-?([0-9]{4})$/gm, "Celular inválido"),
});

const middlewareValidadorBodyAbrigo = async (req: Request, res: Response, next: NextFunction) => {
  tratarErroValidacaoYup(esquemaBodyAbrigo, req, res, next);
}

export { middlewareValidadorBodyAbrigo };